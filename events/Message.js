let message = `Test`;

const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');

module.exports = (client) => {

    client.on('messageReactionAdd', (reaction, user) => {
        let channel = client.channels.get(reaction.message.channel.id);
        let message = channel.fetchMessage(reaction.message.id).then(msg => {
            let user = msg.guild.members.get(user.id);
    
            if (msg.author.id == client.user.id && msg.content != message){
                console.log("BONJOUR");
            }
    
        });
    
    
    });
    
}
