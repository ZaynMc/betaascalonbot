                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  ow = message.channel.permissionOverwrites.get("541008951005806605");

  if(ow.ADD_REACTIONS === true) return;

  try{

 message.guild.createRole({
@@ -54,15 +49,15 @@ console.log(e.stack);
      }

        let heure = collected1.first().content;
        let role = message.guild.roles.find(r => r.name === "VERIFIED BY ASCALON BOT");
        let role = message.guild.roles.find(r => r.name === "Solo Annonce");

      const solotournoi = message.member.guild.channels.find('name', '🌀annonce-tournoi-solo');
      solotournoi.send(`📣 ANNONCE TOURNOI 📣 [${role}]\nMode : **SOLO**\nPlatforme : **TOUS [Pc, Xbox, PS4]**\nDate du tournoi : ${date} à ${heure}\n \nComment s'inscire ? Il suffit juste de réagir avec cette réaction ✅ au message !`).then(msg => {
        msg.react("✅");
      });

      try {
        let ascalonall = message.guild.roles.find(`name`, "VERIFIED BY ASCALON BOT");
        let ascalonall = message.guild.roles.find(`name`, "Solo Annonce");


            solotournoi.overwritePermissions(ascalonall, {                                                                
