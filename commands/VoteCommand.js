module.exports = class ClearCommand {
    constructor() {
        this.name = "roleannonce",
        this.alias = ['role', 'rolespp'],
        this.usage = "a!roleannonce"
    }

    run(bot, message, args) {
        message.delete();

        message.channel.send("Choissez votre mode de jeux \n \n __**Solo**__ : 🙍 \n __**Duo**__ : 👭 \n __**Squad**__ : :family_wwg:").then(msg => {
            msg.react("🙍");
            msg.react("👭");
            msg.react(":family_wwg:");
        });
        }
    } 
