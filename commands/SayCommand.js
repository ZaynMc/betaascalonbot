module.exports = class ClearCommand {
    constructor() {
        this.name = "say",
        this.alias = ['say', 's'],
        this.usage = "a!say"
    }

    run(bot, message, args) {

        let isAdmin = message.member.hasPermission("MANAGE_CHANNELS");
        if(!isAdmin) return;

        let arg = message.content.split(" ").slice(1);
        let botmessage = arg.join(" ");
    
        message.delete();
        
        message.channel.send(botmessage);

        }
    }   