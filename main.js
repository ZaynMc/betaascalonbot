const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const path = require("path");
const queue = new Map();
const ytdl = require('ytdl-core');
const dotenv = require('dotenv');

dotenv.config();

const { CommandHandler } = require("djs-commands")
const CH = new CommandHandler({
    folder: __dirname + '/commands/',
    prefix: ['a!','!', 'e!','']
    
    
    
  });


client.on("ready", () => {
    console.log(`Bot online`);

   // client.user.setActivity("Mp For Support");

    fs.readdirSync(path.join(__dirname, "events")).forEach(function(file) {
      require('./events/' + file)(client);
  });

  let interval = setInterval(() => {
    let time = new Date();
    let min = time.getMinutes();
    let heur = time.getHours();

    if(min == "01" && heur == "00") {
      var channel = client.channels.get('518505718517596211'); 
      channel.sendMessage("!shop");
    }
  }, 60000);
});

client.on("message", async message => {
  if(message.channel.type === 'dm') return;
  //if(message.author.type === 'bot') return;
  //if(message.author.id !== '184730747079229441') return;
  let args = message.content.split(" ");
  let command = args[0];
  let cmd = CH.getCommand(command);
  //if(!cmd) return;
  console.log("test1");
  const serverQueue = queue.get(message.guild.id);
  if (message.content.startsWith(`a!play`)) {
	  	console.log("test2");
		execute(message, serverQueue);
		return;
  } else if (message.content.startsWith(`a!skip`)) {
		skip(message, serverQueue);
		return;
  } else if (message.content.startsWith(`a!stop`)) {
		stop(message, serverQueue);
		return;
  }
	
  try{
      const serverQueue = queue.get(message.guild.id);
      cmd.run(client,message,args,serverQueue,queue)
  }catch(e){
      console.log(e)
  }

});

async function execute(message, serverQueue) {
	const args = message.content.split(' ');

	const voiceChannel = message.member.voiceChannel;
	if (!voiceChannel) return message.channel.send('You need to be in a voice channel to play music!');
	const permissions = voiceChannel.permissionsFor(message.client.user);
	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
		return message.channel.send('I need the permissions to join and speak in your voice channel!');
	}

	const songInfo = await ytdl.getInfo(args[1]);
	const song = {
		title: songInfo.title,
		url: songInfo.video_url,
	};

	if (!serverQueue) {
		const queueContruct = {
			textChannel: message.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true,
		};

		queue.set(message.guild.id, queueContruct);

		queueContruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueContruct.connection = connection;
			play(message.guild, queueContruct.songs[0]);
		} catch (err) {
			console.log(err);
			queue.delete(message.guild.id);
			return message.channel.send(err);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		return message.channel.send(`${song.title} has been added to the queue!`);
	}

}

function skip(message, serverQueue) {
	if (!message.member.voiceChannel) return message.channel.send('You have to be in a voice channel to stop the music!');
	if (!serverQueue) return message.channel.send('There is no song that I could skip!');
	serverQueue.connection.dispatcher.end();
}

function stop(message, serverQueue) {
	if (!message.member.voiceChannel) return message.channel.send('You have to be in a voice channel to stop the music!');
	serverQueue.songs = [];
	serverQueue.connection.dispatcher.end();
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', () => {
			console.log('Music ended!');
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => {
			console.error(error);
		});
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
}

client.login(process.env.TOKEN);
