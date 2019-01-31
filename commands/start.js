const ytdl = require('ytdl-core');
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
      message.delete();
      return;
  }
  modRole = message.guild.roles.find('name', 'Snipe Annonce');
  const messageSnipe = message.member.guild.channels.find('name', '📣snipe-annonces📣');

  messageSnipe.send(`📣 ANNONCE SNIPE 📣 [${modRole}]\nMode : **SOLO**\nPlatforme : **TOUS [Pc, Xbox, PS4]**\nRejoignez le channel : 📞 VOCAL SNIPE 📞\n \n Commence dans 5 minutes...`);
}

module.exports.help = {
  name: "start"
}
