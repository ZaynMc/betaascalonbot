const ytdl = require('ytdl-core');
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
      message.delete();
      return;
  }
  const messageSnipe = message.member.guild.channels.find('name', '📣snipe-annonces📣');
    messageSnipe.send(`SNIPE [@here]\nMode : **SOLO**\nPlatforme : **TOUS [Pc, Xbox, PS4]**\nRejoignez le channel : count\n \n Commence dans 5 minutes...`);


}

module.exports.help = {
  name: "count"
}
