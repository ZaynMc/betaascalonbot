const Discord = require("discord.js");
 const bot = new Discord.Client({disableEveryone: true});

//TOKEN BOT
 const token = process.env.token;

 bot.login(token);
