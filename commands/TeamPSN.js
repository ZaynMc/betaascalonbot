const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let roleID = "540122138422804481";
let role = message.guild.roles.find(r => r.name === "PS4");

if(message.member.roles.has(roleID.id)) {
message.member.removeRole(role).catch(console.error);
return;
}
message.member.addRole(role).catch(console.error);
}

}

module.exports.help = {
  name: "PSN"
}
