const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(message.channel.name == "📕rôles") {
  let roleID = "540121715506806785";
  let role = message.guild.roles.find(r => r.name === "SWITCH");
  if(message.member.roles.has(roleID)) {
    console.log(`Yay, the author of the message has the role!`);


          var embed = new Discord.RichEmbed()
        .setDescription(`${message.member.user} a quitter la team ` + role);

        message.channel.send(embed);

    message.member.removeRole(role).catch(console.error);
  } else {
    console.log(`Nope, noppers, nadda.`);

    var embed = new Discord.RichEmbed()
    .setDescription(`${message.member.user} a rejoint la team ` + role);

    message.channel.send(embed);

    message.member.addRole(role).catch(console.error);

}
}
}

module.exports.help = {
  name: "SWITCH"
}
