const Discord = require("discord.js");

 const ms = require("ms");
 const db = require('quick.db');

 const bot = new Discord.Client({disableEveryone: true});

//TOKEN BOT
 const token = process.env.token;


 bot.login(token);
