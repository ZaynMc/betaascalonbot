const Discord = require("discord.js");

async function go(bot, message,args) {
  const filter = m => m.author.id == message.author.id;
  message.reply("Choissez la date (exemple : 01/01/2000)").then(r => delete(10000));
   message.channel.awaitMessage(filter, {max: 1,time: 10000})
  .then(collected => {

    if(collected.first().content == "cancel") {
      return message.reply("Canceled");
    }

    let date = collected.first().content;

    message.reply("Choissez l'heure (exemple : 15h60)").then(r => delete(10000));

const filter1 = m => m.author.id == message.author.id;
     message.channel.awaitMessage(filter1, {max: 1,time:1000})
    .then(collected1 => {

      if(collected.first().content == "cancel") {
        return message.reply("Canceled");
      }

        let heure = collected1.first().content;

        const xbox = client.emojis.find(emoji => emoji.name === "VERIFIED BY ASCALON BOT");

      const solotournoi = message.member.guild.channels.find('name', '🌀annonce-tournoi-solo');
      solotournoi.send(`📣 ANNONCE TOURNOI ${xbox} 📣 [${modRole}]\nMode : **SOLO**\nPlatforme : **TOUS [Pc, Xbox, PS4]**\nDate du tournoi : ${date} à ${heure}\n \nPour vous inscrirent, réagissez à ce message !`);

      try {
        let ascalonall = guild.roles.find(`name`, "VERIFIED BY ASCALON BOT");


            channel.overwritePermissions(ascalonall, {
            ADD_REACTIONS: true
          });

      } catch(e){
          console.log(e.stack);
        }

    }).catch(err => {
      console.log(err);
    });

  }).catch(err => {
    console.log(err);
  });
}

module.exports.run = async (bot, message, args) => {

  ow = message.channel.permissionOverwrites.get("541008951005806605");

  go(bot, message, args);

  if(ow.ADD_REACTIONS === true) return;

}

module.exports.help = {
  name: "solo"
}
