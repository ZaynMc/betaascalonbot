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
                console.log("0")
                var react1 = message.reactions.emoji.name;
                console.log("0 ||" + react1)
                var react2 = message.reactions.find('👭').count;
                var react3 = message.reactions.find('👥').count;
                console.log("1")
                if (react1 > react2) {
                    console.log("2")
                    if(react1 > react3) {
                        console.log("3")
                        message.channel.send(`Le mode de jeux qui a gagné est __**Duo**__ : 🙍`);   
                    } else {
                        console.log("4")
                        message.channel.send(`Le mode de jeux qui a gagné est __**Squad**__ : 👥`);
                    }
                } else {
                    console.log("5")
                    if(react2 > react3) {
                        console.log("6")
                        message.channel.send(`Le mode de jeux qui a gagné est __**Duo**__ : 👭`);    
                    } else {
                        console.log("7")
                        message.channel.send(`Le mode de jeux qui a gagné est __**Squad**__ : 👥`);
                    }
                }
            }, 10000)
        }
    } 
