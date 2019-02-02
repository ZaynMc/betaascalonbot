const Discord = require("discord.js");
let bdd = JSON.parse(fs.readFileSync("./solotournoi.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  ow = message.channel.permissionOverwrites.get("541008951005806605");

  if(ow.ADD_REACTIONS === true) return;

  message.reply("Choissez la date (exemple : 01/01/2000)").then(r => delete(10000));
  message.channel.awaitMessage(filter, {max: 1,time: 10000})
  .then(collected => {

    if(collected.first().content == "cancel") {
      return message.reply("Canceled");
    }

    let date = collected.first().content;

    message.reply("Choissez l'heure (exemple : 15h60)").then(r => delete(10000));

    message.channel.awaitMessage(filter1, {max: 1,time:1000})
    .then(collected1 => {

      if(collected.first().content == "cancel") {
        return message.reply("Canceled");
      }

        let heure = collected1.first().content;

        const xbox = client.emojis.find(emoji => emoji.name === "everyone");

      const solotournoi = message.member.guild.channels.find('name', '🌀annonce-tournoi-solo');
      solotournoi.send(`📣 ANNONCE TOURNOI ${xbox} 📣 [${modRole}]\nMode : **SOLO**\nPlatforme : **TOUS [Pc, Xbox, PS4]**\nDate du tournoi : ${date} à ${heure}\n \nPour vous inscrirent, réagissez à ce message !`);



    }).catch(err => {
      console.log(err);
    })

  }).catch(err => {
    console.log(err);
  })

}

module.exports.help = {
  name: "solo"
}
