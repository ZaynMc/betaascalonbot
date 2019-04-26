const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const path = require("path");

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

    if(min == "01" && heur == "02") {
      console.log('time is ' + heur + " : " + min);
      var channel = client.channels.get('518505718517596211'); 
      channel.sendMessage("!shop");
    }
  }, 60000);
});

client.on("message", (message) => {
  if(message.channel.type === 'dm') return;
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

client.login(process.env.TOKEN);
