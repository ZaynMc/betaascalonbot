const Discord = require('discord.js');
const moment = require('moment');

module.exports = (client) => {

   /* const config = require("../config.json");

    client.on('guildMemberAdd', member => {

        //welcome message
        let embed = new Discord.RichEmbed()
        .setColor('#33cc33')
        .setDescription('Bienvenue' + member.user + ", avant de te divertir sur ASCALON je t'invite à lire le règlement . Have Fun:tada::hugging: !")
        .setFooter('Nous sommes désormais ' + member.guild.memberCount)
        member.guild.channels.get(config.channel.welcome).send(embed)
    
        client.channels.get(config.channel.totalusers).setName(`Total Users : ${member.guild.memberCount}`); // total users

        //LOG
        let log = new Discord.RichEmbed()
            .setColor(4504882)
            .setAuthor(member.user.username, member.user.avatarURL)
            .setDescription(member.toString() + " à rejoint le discord")
            .addField('Création du compte', moment(member.user.createdAt).format('DD/MM/YYYY HH:mm:ss'), true)
            .addField('ID', member.user.id, true)
            .setTimestamp(new Date());
        if(member.guild.channels.find((channel) => channel.id === config.channel.log))member.guild.channels.find((channel) => channel.id === config.channel.log).send(log);
    });*/
}