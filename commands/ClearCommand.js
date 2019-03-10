module.exports = class TestCommand {
    constructor() {
        this.name = "clear",
        this.alias = ['clear', 'delete'],
        this.usage = "a!test"
    }

    run(bot, message, args) {

        let messagecount = parseInt(args[0]);

        if(isNaN(messagecount)) return message.channel.send(":x: + | Veuillez entrer un nombre valable !");

            if(messagecount > 100){
            
            } else if(messagecount < 2 ) {
                message.channel.send(":x: " + "| Désolée, nous ne pouvons supprimer plus de 100 messages.")
              } else {
                message.channel.fetchMessages({limit: messagecount}).then(messages => msg.channel.bulkDelete(messages, true));
             }  
        }
    }