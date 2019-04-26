    
module.exports = class ClearCommand {
    constructor() {
        this.name = "annoncepp2",
        this.alias = ['anpp2', 'ppannonce2'],
        this.usage = "a!annoncepp2"
    }

    run(bot, message, args) {

        const config = require("../config.json");
        const annoncepp = message.member.guild.channels.find('id', config.channel.ppannonce);
        let role = message.guild.roles.find(r => r.name === config.role.notifpp);

        annoncepp.send(`:loudspeaker: [${role}] Nous allons bientôt lancer des parties personnalisés ! Rejoignez le channel vocal "${config.channel.tournoigeneralvoc}"`);
        }
    }   
