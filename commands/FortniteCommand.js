const Discord = module.require('discord.js');
var fortnite = require('fortnite');
var request = require('request');

module.exports = class TestCommand {
    constructor() {
        this.name = "fortnite",
        this.alias = ['stats', 'stat'],
        this.usage = "a!fortnite <platform> <player>"
    }

    run(bot, message, args) {

        fortnite(args[1], args[2]).then((data) => {
            var STAT = new Discord.RichEmbed()
            .setTitle("__***Fortnite Stats***__")
            .setURL(data.info.url)
            .setThumbnail(message.member.avatarURL)
            .addField("------------------------------------",
                               "Account Username: " + "__**" + data.info.username + "**__" + "\n" +
                               "Account Platform: " + "__**" + data.info.platform + "**__" + "\n" +
                               "------------------------------------\n" +
                               "Total Kills: " + "__**" + data.lifetimeStats[10].value + "**__" + "\n" +
                               "Total Wins: " + "__**" + data.lifetimeStats[7].value + "**__" + "\n" +
                               "Total Top 3: " + "__**" + data.lifetimeStats[2].value + "**__" + "\n" +
                               "Total Top 5: " + "__**" + data.lifetimeStats[1].value + "**__" + "\n" +
                               "Total Top 6: " + "__**" + data.lifetimeStats[3].value + "**__" + "\n" +
                               "Total Top 10: " + "__**" + data.lifetimeStats[0].value + "**__" + "\n" +
                               "Total Top 12: " + "__**" + data.lifetimeStats[4].value + "**__" + "\n" +
                               "Total Top 25: " + "__**" + data.lifetimeStats[5].value + "**__" + "\n" +
                               "Total Matches Played: " + "__**" + data.lifetimeStats[6].value + "**__" + "\n" +
                               "------------------------------------\n", true)
    
            .setColor("0x#FF0000")
    
            message.channel.send(STAT);
    
          }).catch(function(err) {
            message.channel.send(err);
          });
        }
    }   