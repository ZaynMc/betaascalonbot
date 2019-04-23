const Discord = require('discord.js');
const moment = require('moment');

module.exports = (client) => {

    const config = require("../config.json");

client.on('messageUpdate', async function(oldMessage, newMessage) {

    if(oldMessage.content !== newMessage.content && !newMessage.author.bot){
        let log = new Discord.RichEmbed()
            .setColor(16753920)
            .setAuthor(newMessage.author.username, newMessage.author.avatarURL)
            .setDescription(newMessage.author.toString() + " a modifié son message")
            .addField('Ancien Message', (oldMessage && oldMessage.content != null && oldMessage.content !== '')?oldMessage.content:"*Image/Embed*")
            .addField('Nouveau Message', (newMessage.content)?newMessage.content:"*Image/Embed*")
            .addField('ID', newMessage.id, true)
            .addField('Salon', newMessage.channel.toString(), true)
            .setTimestamp(new Date());
            if(newMessage.member.guild.channels.find((channel) => channel.id === config.channel.log))newMessage.member.guild.channels.find((channel) => channel.id === config.channel.log).send(log);
    }
});
}