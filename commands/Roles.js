const Discord = require("discord.js");
exports.run = async (client, message, args) => {
      message.delete ().catch(O_o => {});
    const a = message.guild.roles.get('540278913230700584');
     const b = message.guild.roles.get('540477037094240257');
     const c = message.guild.roles.get('540582229169012746');
     const filter = (reaction) => ['📣', '🏹', '🔨'].includes(reaction.emoji.name);

     const embed = new Discord.RichEmbed()
     .setTitle('Rôles Disponibles')
     .setDescription(`

       📣 ${a.toString()}
       🏹 ${b.toString()}
       🔨 ${c.toString()}

     `
     )
     .setColor(0xdd9323)

     message.channel.send(embed).then(async msg => {

       await msg.react("📣");
       await msg.react("🏹");
       await msg.react("🔨");

       msg.awaitReactions(filter, {
         max: 4,
         time: 30000,
         errors: ['time']

       }).then(collected => {
         const reaction = collected.first();

         switch(reaction.emoji.name) {
           case '📣':
           message.member.addRole(a);
           //message.channel.send('Rôle add');

           case '🏹':
           let roleID = "540278913230700584";
           let role = message.guild.roles.find(r => r.name === "Battle Royale");
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
          // message.channel.send('Rôle add');


           case '🔨':
           let roleID = "540477037094240257"; //
           let role = message.guild.roles.find(r => r.name === "Mode Créatif");
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
          // message.channel.send('Rôle add');

         }
       }).catch(collected => {
         return message.channel.send('Veuillez contactez Zayn.');

       });

       });
     }
module.exports.help = {
     name: 'roles'
 };﻿
