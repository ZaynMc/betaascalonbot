const {RichEmbed} = require ('discord.js');
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
         max: 3,
         time: 30000,
         errors: ['time']

       }).then(collected => {
         const reaction = collected.first();

         switch(reaction.emoji.name) {
           case '📣':
           message.member.addRole(a);
           message.channel.send('Rôle add');
           break;

           case '🏹':
           message.member.addRole(b);
           message.channel.send('Rôle add');
           break;

           case '🔨':
           message.member.addRole(c);
           message.channel.send('Rôle add');
           break;

         }
       }).catch(collected => {
         return message.channel.send('Veuillez contactez Zayn.');

       });

       });
     }
module.exports.help = {
     name: 'roles'
 };﻿
