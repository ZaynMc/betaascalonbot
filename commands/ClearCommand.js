module.exports = class TestCommand {
    constructor() {
        this.name = "clear",
        this.alias = ['clear', 'delete'],
        this.usage = "a!test"
    }

    run(bot, message, args) {

        let messagecount = parseInt(args[0]);

            if(messagecount > 100){
                message.channel.send(":x: | Désolée, nous ne pouvons supprimer plus de 100 messages.");
            } else if(messagecount < 2 ) {
                message.channel.send(":x: | Désolée, nous ne pouvons supprimer moins de 2 messages.");
              } else {
                message.channel.fetchMessages({limit: messagecount}).then(messages => msg.channel.bulkDelete(messages, true));
             }  
        }
    }   