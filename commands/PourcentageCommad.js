module.exports = class TestCommand {
    constructor() {
        this.name = "pourcentage",
        this.alias = ['pourcent', 'pou'],
        this.usage = "a!pourcentage"
    }

    run(bot, message, args) {

        let args0 = parseInt(args[0]);
        let args1 = parseInt(args[1]);
        let args2 = parseInt(args[2]);

        message.channel.send("Pourcentage du sondage : \n\n✔️ Pourcentage de oui : " + args0 / args2 + " %");
            
        }
    }   