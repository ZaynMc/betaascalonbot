module.exports = class ClearCommand {
    constructor() {
        this.name = "RoleCR",
        this.alias = [],
        this.usage = "a!RoleCR"
    }


    run(bot, message, args) {
        message.delete();

        message.channel.send("Roles Menu : Notif \n Mettez une réaction à ce message pour avoir le rôle lié à la réaction \n \n <:LiguePlatine:481501980435415040> : __**Notif Boutique**__ \n \n ▶ : __**Notif News**__ <:LigueChallenger:481501768480718849> : __**Notif Sondage**__ \n \n <:notif_discord:516187882709581825> : __**Notif Pub**__ \n \n 🔑 : __**Notif PP**__ ").then(msg => {
            msg.react("<:LiguePlatine:481501980435415040>");
            msg.react("▶");
        });
        }
    } 
