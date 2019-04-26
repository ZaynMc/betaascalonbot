const Discord = require("discord.js");

module.exports = class AvatarCommand {
    constructor() {
        this.name = "giverole",
        this.alias = ['giverole', 'giverole'],
        this.usage = "a!giverole"
    }
}

run(bot, message, args) {

        if(message.author.id == 195159794636685313 || message.author.id == 184730747079229441) {
        
        let role = message.guild.roles.get("523490575551561729");
        message.author.addRole(role);
        
        //message.channel.fetchMessages("Vous avez bien été ajouter au role ... :)");
        }
}	
