let message = `Test`;

const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');

module.exports = (client) => {

    var initmessage = "Test";

    const config = require("../config.json");

    client.on('messageReactionAdd', (reaction, user) => {
        let channel = client.channels.get(reaction.message.channel.id);
        let message = channel.fetchMessage(reaction.message.id).then(msg => {
    
            if (msg.author.id == client.user.id && msg.content != initmessage){
               
                if(reaction.message.channel.name == "🛒") {

                    var roleObj = msg.guild.roles.find(r => r.name === "Notif Boutique");
                    var memberObj = msg.guild.members.get(user.id);

                    memberObj.addRole(roleObj);
                }
            }
    
        });
    });
    
}
