const Discord = require('discord.js');
module.exports = class HelpCommand {
    constructor() {
        this.name = "sondage",
        this.alias = ["sond", "s"],
        this.usage = "a!sondage"
    }

    run(bot, message, args) {

        const config = require("../config.json");
        
        let isAdmin = message.member.hasPermission("MANAGE_EMOJIS");
        if(!isAdmin) return;

        let arg = message.content.split(" ").slice(1);
        let thingToEco = arg.join(" ");

        let myRole = message.guild.roles.find(role => role.name === config.role.notifsondage)

        //📊📆🗓️

        bot.channels.get(config.channel.sondage).sendMessage(`🗓️ **Sondage du Jour** \n__Question__ :\n ${thingToEco}\n\n ${thingToEco}`);
        
        
        message.delete();

        
    }
}
