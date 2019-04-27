module.exports = class ClearCommand {
    constructor() {
        this.name = "RoleCR",
        this.alias = [],
        this.usage = "a!RoleCR"
    }

    run(bot, message, args) {

        let isAdmin = message.member.hasPermission("MANAGE_CHANNELS");
        if(!isAdmin) return;

        const config = require("../config.json");     
        const annoncepp = message.member.guild.channels.find('id', config.channel.ppannonce);
        let role = message.guild.roles.get(config.role.notifpp);

        annoncepp.send(`📢 [${role}] Nous allons bientôt lancer des parties personnalisés ! Rejoignez le channel vocal "${config.channel.tournoigeneralvoc}"`);
        }
    }   
