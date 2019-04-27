module.exports = class ClearCommand {
    constructor() {
        this.name = "RoleCR",
        this.alias = [],
        this.usage = "a!RoleCR"
    }


    run(bot, message, args) {
        message.delete();

        message.channel.send("Roles Menu : Notif \n Mettez une réaction à ce message pour avoir le rôle lié à la réaction \n \n Notif Boutique : <:LiguePlatine:481501980435415040>").then(msg => {
            msg.react("<:LiguePlatine:481501980435415040>");
            msg.react("❌");
        });
        }
    } 
