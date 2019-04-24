const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');

module.exports = (client) => {

    let initialMessage = `**:bell: __Réction Notification Partie Perso__ :bell:**`;

    client.on('raw', event => {
        if (event.t === 'MESSAGE_REACTION_ADD' || event.t == "MESSAGE_REACTION_REMOVE"){
           
            let channel = client.channels.get(event.d.channel_id);
            let message = channel.fetchMessage(event.d.message_id).then(msg=> {
            let user = msg.guild.members.get(event.d.user_id);
            
            if (msg.author.id == client.user.id && msg.content != initialMessage){
           
                var re = `\\*\\*"(.+)?(?="\\*\\*)`;
                var role = msg.content.match(re)[1];

                console.log("role ! " + role);
           
                if (user.id != client.user.id){
                    var roleObj = msg.guild.roles.find(r => r.name === role);
                    var memberObj = msg.guild.members.get(user.id);
                   
                    if (event.t === "MESSAGE_REACTION_ADD"){
                        memberObj.addRole(roleObj);
                    } else {
                        memberObj.removeRole(roleObj);
                    }
                }
            } else {
                return;
            }
            })
        }  
    });
    
}
