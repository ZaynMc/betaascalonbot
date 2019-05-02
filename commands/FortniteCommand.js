const Fortnite = require('fortnite');
const stats = new Fortnite('32e1fe4f-fc2f-4c49-8481-5ff95768dc29'); 
const Discord = require('discord.js');
const client = new Discord.Client();


module.exports = class FortniteCommand {
    constructor() {
        this.name = "fortnite",
        this.alias = ['stats', 'stat'],
        this.usage = "a!fortnite <platform> <player>"
    }

    run(bot, message, args) {

            let platform;
            let username;

            if (!['pc','xbl','psn'].includes(args[1])) return message.channel.send('**S: `!fortnite [ pc | xbl | psn ] <username>`**');

            if (!args[2]) return message.channel.send('**S\'il vous plaît indiqué le nom d\'utilisateur `!fortnite [ pc | xbl | psn ] <username>`**');

            platform = args[1];
            if (args[3] != undefined) {
              username = args[2] + " " + args [3];
            } else {
              username = args[2];
            }
            stats.user(username, platform).then( data => {
            let embed = new Discord.RichEmbed()
            .setTitle("__***Fortnite Stats***__")
            .setThumbnail(message.member.avatarURL)
            .addField("------------------------------------",
                               "Account Username: " + "__**" + data.username + "**__" + "\n" +
                               "Account Platform: " + "__**" + data.platform + "**__" + "\n" +
                               "------------------------------------\n" +
                               "Total Kills: " + "__**" + data.stats.lifetime.kills + "**__" + "\n" +
                               "Total Wins: " + "__**" + data.stats.lifetime.wins + "**__" + "\n" +
                               "Total Top 3: " + "__**" + data.stats.lifetime.top_3 + "**__" + "\n" +
                               "Total Top 5: " + "__**" + data.stats.lifetime.top_5 + "**__" + "\n" +
                               "Total Top 6: " + "__**" + data.stats.lifetime.top_6 + "**__" + "\n" +
                               "Total Top 12: " + "__**" + data.stats.lifetime.top_12 + "**__" + "\n" +
                               "Total Top 25: " + "__**" + data.stats.lifetime.top_25 + "**__" + "\n" +
                               "Total Matches Played: " + "__**" + data.stats.lifetime.matches + "**__" + "\n" +
                               "------------------------------------\n", true)
    
            .setColor("0x#FF0000")
    
            message.channel.send(embed);

            })
            .catch(error => {

              message.channel.send("Username introuvable !");

            })

       }
    }