const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
      message.delete();
      return;
  }

  message.channel.send("Next scrim in 30 secondes");

}

module.exports.help = {
  name: "30s"
}
