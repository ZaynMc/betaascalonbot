module.exports = class ClearCommand {
    constructor() {
        this.name = "lancementpp",
        this.alias = ['lancepp', 'pp'],
        this.usage = "a!lancementpp"
    }

    run(bot, message, args) {

        let isAdmin = message.member.hasPermission("MANAGE_CHANNELS");
        if(!isAdmin) return;

        var args1 = args[1];
        var args2 = args[2];

        const config = require("../config.json");
        const annoncepp = message.member.guild.channels.find('id', config.channel.ppannonce);
        let role = message.guild.roles.find(r => r.name === config.role.notifpp);

        annoncepp.send(`:loudspeaker: [${role}] Lancement Game Partie Personnalisée !\n\n:red_circle: Mode de Jeux : ${args1}\n:key: Code Game : ${args2}\n\n:point_right: Lancement de la Game 1 minute après ce message !`);

        /*annoncepp.send('', {
            files: [
                "../bot/images/ligne.png"
            ]
        });*/

        timer:setTimeout(function(){
            annoncepp.send(`:loudspeaker: [${role}] Lancement de la Game !\n\nBonne chance à tou(te)s`);
            annoncepp.send('', {
                files: [
                    "../bot/images/ligne.png"
                ]
            });
        }, 60000)


       /* const timeoutObj = setTimeout(() => {
            annoncepp.send(`:loudspeaker: [${role}] Lancement de la Game !\n:\nBonne chance à tou(te)s`);
            
          }, 1000);*/
        }
    }   