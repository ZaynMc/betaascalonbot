    
module.exports = class ClearCommand {
    constructor() {
        this.name = "tttannoncepp",
        this.alias = ['tttanpp', 'tttppannonce'],
        this.usage = "ttta!annoncepp"
    }

    run(bot, message, args) {

        const config = require("../config.json");
        const annoncepp = message.member.guild.channels.find('id', config.channel.ppannonce);
        let role = message.guild.roles.find(r => r.name === config.role.notifpp);

        message.channel.send(`📢 [${role}] Nous allons bientôt lancer des parties personnalisés ! Rejoignez le channel vocal "${config.channel.tournoigeneralvoc}"`);
        }
    }   
