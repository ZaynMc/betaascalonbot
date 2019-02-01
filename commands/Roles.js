const Discord = require("discord.js");
exports.run = async (client, message, args) => {
     message.delete ().catch(O_o => {});
     const a = message.guild.roles.get('540121484690194432');
     const b = message.guild.roles.get('540121221971443714');
     const c = message.guild.roles.get('540121715506806785');
     const d  = message.guild.roles.get('540121554374361099');
     const e = message.guild.roles.get('540121685064417280');
     const f = message.guild.roles.get('540278913230700584');
     const g = message.guild.roles.get('540477037094240257');

     const xbox = client.emojis.find(emoji => emoji.name === "xbox");
     const ps4 = client.emojis.find(emoji => emoji.name === "ps4");
     const sw = client.emojis.find(emoji => emoji.name === "switch");
     const pc = client.emojis.find(emoji => emoji.name === "pc");
     const mobile = client.emojis.find(emoji => emoji.name === "mobile");
     const battleroyale = client.emojis.find(emoji => emoji.name === "Battle Royale");
     const creatif = client.emojis.find(emoji => emoji.name === "Mode Créatif");

     const embed = new Discord.RichEmbed()
     .setTitle('Rôles Disponibles')
     .setDescription(`
       ${xbox} ${a}
       ${ps4} ${b}
       ${sw} ${c}
       ${pc} ${d}
       ${mobile} ${e}
       ${battleroyale} ${f}
       ${creatig} ${g}

     `
     )
     .setColor(0xdd9323)

     message.channel.send(embed).then(msg => {
       msg.react(xbox.id);
       msg.react(ps4.id);
       msg.react(sw.id);
       msg.react(pc.id);
       msg.react(mobile.id);
       msg.react("🏹");
       msg.react("🔨");
     });

     }
module.exports.help = {
     name: 'roles'
 };﻿
