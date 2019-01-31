const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
      message.delete();
      return;
  }

  message.channel.send("Next scrim in 1 minute");

}

module.exports.help = {
  name: "60s"
}
