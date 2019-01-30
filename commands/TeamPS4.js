const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let roleID = "540122138422804481";
  if(message.member.roles.has(role.id)) {
    console.log(`Yay, the author of the message has the role!`);
  } else {
    console.log(`Nope, noppers, nadda.`);
  }
}

module.exports.help = {
  name: "PS4"
}
