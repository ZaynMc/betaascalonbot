const Discord = require("discord.js");
exports.run = async (client, message, args) => {
     message.delete ().catch(O_o => {});
     const a = message.guild.roles.get('540121484690194432');
     const b = message.guild.roles.get('540121221971443714');
     const c = message.guild.roles.get('540582229169012746');
     const d  = message.guild.roles.get('540121554374361099');
     const e = message.guild.roles.get('540121685064417280');

     const xbox = client.emojis.find(emoji => emoji.name === "xbox");
     const ps4 = client.emojis.find(emoji => emoji.name === "ps4");
     const sw = client.emojis.find(emoji => emoji.name === "switch");
     const pc = client.emojis.find(emoji => emoji.name === "pc");
     const mobile = client.emojis.find(emoji => emoji.name === "mobile");

     const embed = new Discord.RichEmbed()
     .setTitle('Rôles Disponibles')
     .setDescription(`

       ${xbox} ${a.toString()}
       ${ps4} ${b.toString()}
       ${sw} ${c.toString()}
       ${pc} ${d.toString()}
       ${mobile} ${e.toString()}

     `
     )
     .setColor(0xdd9323)

     message.channel.send(embed).then(function (message) {
          message.react("https://cdn.discordapp.com/emojis/540819215674769408.png?v=1")
          message.react("👎")
       		message.pin()
          message.delete()
    			});

     }
module.exports.help = {
     name: 'roles'
 };﻿
