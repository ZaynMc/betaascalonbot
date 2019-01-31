const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
      message.delete();
      return;
  }

  modRole = message.guild.roles.find('name', 'Snipe Annonce');
  const messageSnipe = message.member.guild.channels.find('name', '📣snipe-annonces📣');

  var embed = new Discord.RichEmbed()
  .setTitle(`📣 Game Snipe - Décompte 📣 [${modRole}]`)
  .setDescription("Démarrage de la game dans une 1 minute")
  .setFooter("□□□□□□□□□□ - 0 %")

  message.channel.send(embed);

  messageSnipe.send(embed);

}

module.exports.help = {
  name: "60s"
}
