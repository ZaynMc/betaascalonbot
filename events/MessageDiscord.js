const Discord = require('discord.js');
const moment = require('moment');

module.exports = (client) => {

    const config = require("../config.json");

    bot.on("message", async message => {
      if(message.channel.type === "dm") return;
    
      // Part 1 : checking & removing the text
      //1 blacklisted words
    let blacklisted = ['discord.gg'] //words put , after the word
    
    //2 looking for words
    let foundInText = false;
    for (var i in blacklisted) { // loops through the blacklisted list
      if(message.channel.name == "👍partenariat" ||message.channel.name == "🤝échange-de-pub🤝" || message.channel.name == "👆petite-pub" || message.member.hasPermission("MANAGE_MESSAGES")) return;
      
    
      if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
    }
    // checks casesensitive words
    
    //3 deletes and send message
      if (foundInText) {
        //message delete
        message.delete();
        //message send to author
        message.author.send('La pub de discord sur le serveur ASCALON est interdite !');
        //message channel send to author for advertissment
        message.channel.send(`<@${message.author.id}> Bonjour, la pub de serveur discord est interdite. Dernière avertissement avant le ban`).then(message => message.delete(5000));
    
    
      }
    
    });

}