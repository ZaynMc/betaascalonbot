const Discord = require('discord.js');

module.exports = (client) => {

    const config = require("../config.json");

    client.on('guildMemberRemove', member => {
        
        //change channel member count 
      //  client.channels.get(config.channel.totalusers).setName(`Total Users : ${member.guild.memberCount}`); // total users
/*
        //log
        let log = new Discord.RichEmbed()
        .setColor(4504882)
        .setAuthor(member.user.username, member.user.avatarURL)
        .setDescription(member.toString() + " à quitter le discord")
        .addField('Création du compte', moment(member.user.createdAt).format('DD/MM/YYYY HH:mm:ss'), true)
        .addField('ID', member.user.id, true)
        .setTimestamp(new Date());
    if(member.guild.channels.find((channel) => channel.id === config.channel.log))member.guild.channels.find((channel) => channel.id === config.channel.log).send(log);*/
    }); 
}
