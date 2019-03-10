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
          })
    }   


    /**  var headers = {
            'TRN-Api-Key': 'ef632672-b4a0-4708-90f0-a7f03176512a'
          }

          fortnite()

          let arg = message.content.split(" ").slice(1);
            let botmessage = arg.join(" ");
        
          var options = {
            url: `https://api.fortnitetracker.com/v1/profile/` + `pc` + "/" + `${botmessage}`,
            method: 'GET',
            headers: headers
          }
        
          request(options, function (error, response, body) {
            var info = JSON.parse(body);
        
            var LifeTime = "";
            var Solo = "";
            var Duo = "";
            var Squad = "";
        
            for(var currentStatIndex = 0; currentStatIndex < info.lifeTimeStats.length; currentStatIndex++) {
                LifeTime += info.lifeTimeStats[currentStatIndex].key + ": " + info.lifeTimeStats[currentStatIndex].value + "\n";
            }
        
            for(var STATS in info.stats.p2){
                Solo += info.stats.p2[STATS].label + ": " + info.stats.p2[STATS].displayValue + "\n";
            }
        
            for(var STATS_1 in info.stats.p10){
                Duo += info.stats.p10[STATS_1].label + ": " + info.stats.p10[STATS_1].displayValue + "\n";
            }
        
            for(var STATS_2 in info.stats.p9){
                Squad += info.stats.p9[STATS_2].label + ": " + info.stats.p9[STATS_2].displayValue + "\n";
            }
        
            message.channel.send("```" + "\n" +
                                 "----------------------------------" + "\n" + 
                                 "Account Username: " + info.epicUserHandle + "\n" +
                                 "Account Platform: " + info.platformNameLong + "\n" +
                                 "----------LIFETIME STATS----------" + "\n" + 
                                 LifeTime + "\n" +
        
                                 "------------SOLO STATS------------" + "\n" +
                                 Solo + "\n" +
        
                                 "------------DUO STATS-------------" + "\n" +
                                 Duo + "\n" +
        
                                 "------------SQUAD STATS-----------" + "\n" +
                                 Squad + "\n"+ "```");
        })
    }*/