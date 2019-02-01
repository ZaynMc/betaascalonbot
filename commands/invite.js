const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

client.generateInvite().then(link => {
        var embed = new Discord.RichEmbed()
            .setColor(9955331)
            .addField("Invite link", "[link](" + link + ")", false);

        message.channel.send(embed);
});
}

module.exports.help = {
  name: "invite"
}
