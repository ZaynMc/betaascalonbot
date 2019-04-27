module.exports = class ClearCommand {
    constructor() {
        this.name = "RoleCR",
        this.alias = [],
        this.usage = "a!RoleCR"
    }


    run(bot, message, args) {
        message.delete();

        message.channel.send("Choissez votre mode de jeux : \n \n __**Arène**__ : ✅ \n __**Normal**__ : ❌").then(msg => {
            msg.react("✅");
            msg.react("❌");
        });
        }
    } 
