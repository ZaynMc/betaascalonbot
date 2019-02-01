const Discord = require("discord.js");
exports.run = async (client, message, args) => {
     message.delete ().catch(O_o => {});
     const a = message.guild.roles.get('540121484690194432');
     const b = message.guild.roles.get('540121221971443714');
     const c = message.guild.roles.get('540582229169012746');
     const d  = message.guild.roles.get('540121554374361099');
     const e = message.guild.roles.get('540121685064417280');

     const embed = new Discord.RichEmbed()
     .setTitle('Rôles Disponibles')
     .setDescription(`

       :xbox: ${a.toString()}
       :ps4: ${b.toString()}
       :switch: ${c.toString()}
       :pc: ${d.toString()}
       :mobile: ${e.toString()}

     `
     )
     .setColor(0xdd9323)

     message.channel.send(embed);

     }
module.exports.help = {
     name: 'roles'
 };﻿
