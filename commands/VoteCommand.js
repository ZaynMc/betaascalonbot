module.exports = class ClearCommand {
    constructor() {
        this.name = "roleannonce",
        this.alias = ['role', 'rolespp'],
        this.usage = "a!roleannonce"
    }

    run(bot, message, args) {
        message.delete();

        message.channel.send("Choissez votre mode de jeux \n \n __**Solo**__ : 🙍 \n __**Duo**__ : 👭 \n __**Squad**__ : 👥").then(msg => {
            msg.react("🙍");
            msg.react("👭");
            msg.react("👥");
        });
        
        timer:setTimeout(function(){
            var react1 = message.reactions.find(reaction => reaction.emoji.name === '🙍').count
            var react2 = message.reactions.find(reaction => reaction.emoji.name === '👭').count
            var react3 = message.reactions.find(reaction => reaction.emoji.name === '👥').count
            if (react1 > react2) {
                if(react2 > react3) {
                    message.channel.send(`Le mode de jeux qui a gagné est __**Duo**__ : 👭`);   
                } else {
                    message.channel.send(`Le mode de jeux qui a gagné est __**Squad**__ : 👥`);
                }
            }
            if (react2 > react1) {
                if(react2 > react3) {
                    message.channel.send(`Le mode de jeux qui a gagné est __**Duo**__ : 👭`);    
                } else {
                    message.channel.send(`Le mode de jeux qui a gagné est __**Squad**__ : 👥`);
                }
            }
            
            });
        }, 90000)
        }
    } 
