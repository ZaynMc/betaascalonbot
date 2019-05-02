
module.exports = class ClearCommand {
    constructor() {
        this.name = "VoteArene",
        this.alias = ['VoteArene', 'VoteArene'],
        this.usage = "a!VoteArene"
    }

    run(bot, message, args) {
        message.delete();

        
        let isAdmin = message.member.hasPermission("MANAGE_CHANNELS");
        if(!isAdmin) return;
        
        message.channel.send("Choissez votre mode de jeux : \n \n __**Arène**__ : ✅ \n __**Normal**__ : ❌").then(msg => {
            msg.react("✅");
            msg.react("❌");
        });
        }
    } 
