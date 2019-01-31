const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete();

    const a = message.guild.roles.get("540278913230700584");
    const b = message.guild.roles.get("540477037094240257");
    const c = message.guild.roles.get("540582229169012746");

    const filtrer = (reaction, user) => ['🔊', '🔨', '🏹'].includes(reaction.emoji.name) && user.id == message.author.id;

    const embed = new Discord.RichEmbed()
    .setTitle('Rôle Disponibles')
    .setDescription(`

      🔊 ${a.toString()}
      🔨 ${b.toString()}
      🏹 ${c.toString()}

      `)
      .setColor(0xdd9323)

      message.channel.send(embed).then(async msg => {

        message.react("🔊");
        message.react("🔨");
        message.react("🏹");

        message.awaitReaction(filter, {
          max: 100,
          time: 9999999999,
          errors: ['time']

        }).then(collected => {
          const reaction = collected.first();

          switch(reaction.emoji.name) {
            case '🔊':
            message.member.addRole(a);
            break;
            case '🔨':
              message.member.addRole(b);
            break;
            case '🏹':
              message.member.addRole(c);
            break;
          }
        })
      })
}

module.exports.help = {
  name: "roles"
}
