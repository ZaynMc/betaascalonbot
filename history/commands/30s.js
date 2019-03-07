const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
      message.delete();
      return;
  }

  let modRole = message.guild.roles.find('name', 'Snipe Annonce');
  const messageSnipe = message.member.guild.channels.find('name', '📣snipe-annonces📣');

  var embed = new Discord.RichEmbed()
  .setTitle(`📣 Game Snipe - Décompte 📣`)
  .setDescription(`Démarrage de la game dans une 1 minute`)
  .setFooter(`■■■■■□□□□□ - 50 %`)

  message.channel.send(embed);

}

module.exports.help = {
  name: "30s"
}

/**
 * const c = message.guild.roles.get('540121715506806785');
     const d  = message.guild.roles.get('540121554374361099');
     const e = message.guild.roles.get('540121685064417280');
     const f = message.guild.roles.get('540278913230700584');
     const g = message.guild.roles.get('540477037094240257');
 * 
 *   const sw = client.emojis.find(emoji => emoji.name === "switch");
     const pc = client.emojis.find(emoji => emoji.name === "pc");
     const mobile = client.emojis.find(emoji => emoji.name === "mobile");
     const battleroyale = client.emojis.find(emoji => emoji.name === "Battle Royale");
     const creatif = client.emojis.find(emoji => emoji.name === "Mode Créatif");

     const embed = new Discord.RichEmbed()
     .setTitle('Rôles Disponibles')
@ -25,21 +23,21 @@ exports.run = async (client, message, args) => {
       ${sw} ${c}
       ${pc} ${d}
       ${mobile} ${e}
       ${battleroyale} ${f}
       ${creatif} ${g}
       🏹 ${f}
       🔨 ${g}

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
       await msg.react(xbox.id);
       await msg.react(ps4.id);
       await msg.react(sw.id);
       await msg.react(pc.id);
       await msg.react(mobile.id);
       await msg.react("🏹");
       await msg.react("🔨");
     });

 */
