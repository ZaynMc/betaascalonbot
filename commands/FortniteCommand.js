module.exports = class TestCommand {
    constructor() {
        this.name = "fortnite",
        this.alias = ['stats', 'stat'],
        this.usage = "a!fortnite <platform> <player>"
    }

    run(bot, message, args) {

        var headers = {
            'TRN-Api-Key': 'ef632672-b4a0-4708-90f0-a7f03176512a'
          }
        
          var options = {
            url: `https://api.fortnitetracker.com/v1/profile/` + `${args[0]}` + "/" + `${args[1]}`,
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
    }

    }   
