module.exports = class ClearCommand {
    constructor() {
        this.name = "RoleCR",
        this.alias = [],
        this.usage = "a!RoleCR"
    }


    run(bot, message, args) {
        message.delete();

        message.channel.send("Roles Menu : Notif \n Mettez une réaction à ce message pour avoir le rôle lié à la réaction \n \n <:LiguePlatine:481501980435415040> : __**Notif Boutique**__ \n \n ▶ : __**Notif News**__ \n\n <:LigueChallenger:481501768480718849> : __**Notif Sondage**__ \n \n <:notif_discord:516187882709581825> : __**Notif Pub**__ \n \n 🔑 : __**Notif PP**__ ").then(msg => {
            let emoji1 = msg.guild.emojis.find('id', "notif_discord");
	    let emoji2 = msg.guild.emojis.find('name', "LigueChallenger");
            let emoji3 = msg.guild.emojis.find('name', "LiguePlatine");
            msg.react("🔑");
            msg.react("▶");
	    msg.react('481501980435415040');
	    msg.react('481501768480718849');
	    msg.react('516187882709581825');
        });
        }
    } 
