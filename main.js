const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const path = require("path");

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

    if(min == "02" && heur == "02") {
      //console.log('proute');
      var channel = client.channels.get('570005816803852299');
      channel.sendMessage("!shop");
    }
  }, 60000);
});

client.on("message", (message) => {
  if(message.channel.type === 'dm') re
  //if(message.author.type === 'bot') return;
  //if(message.author.id !== '184730747079229441') return;
  let args = message.content.split(" ");
  let command = args[0];
  let cmd = CH.getCommand(command);
  if(!cmd) return;

  try{
      cmd.run(client,message,args)
  }catch(e){
      console.log(e)
  }
});

const token = 'NTM5NTU3ODc4MjgxNzk3NjQz.D3kAmw.v2hbgZPRUArwUAfLgCfiQiujNVU';
client.login(token);





