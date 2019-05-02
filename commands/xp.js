const Discord = require("discord.js");
module.exports = class HelpCommand {
    constructor() {
        this.name = "xp",
        this.alias = [],
        this.usage = ""
    }

run(bot, message, args, con) {

	let target = message.mentions.users.first() || message.guild.members.get(args[1]) || message.author;

	con.query(`SELECT * FROM xp WHERE id = '${target.id}'`, (err , rows) => {
		if(err) throw err;

		if(!rows[0]) return message.channel.send("Cette utilisateur a 0 xp");

		let xp = rows[0].xp;
		let level = rows[0].level;

		const exampleEmbed = new Discord.RichEmbed()
			.setColor('#0099ff')
			.setTitle('Level de ' + target.username)
			.setDescription('XP et level d \'un utilisateur spécifié')
			.addField('Level de ' + target.username, level, true)
			.addField('XP requis pour le level suivant', XpForLevel(level) , true)
			.addBlankField()
			.addField('Xp de ' + target.username, xp , true)
			.setTimestamp()
			.setFooter(target.username, null);

			message.channel.send(exampleEmbed);

	});
	}
}	

function XpForLevel(level) {

	const LevelConfig = require("../ConfigLevel.json");
	if (level == "0") {
		return LevelConfig.Xp.lvl01;
	} else if (level == 1) {
		return LevelConfig.Xp.lvl02;
	} else if (level == 2) {
		return LevelConfig.Xp.lvl03;
	} else if (level == 3) {
		return LevelConfig.Xp.lvl04;
	} else if (level == 4) {
		return LevelConfig.Xp.lvl05;
	} else if (level == 5) {
		return LevelConfig.Xp.lvl06;
	} else if (level == 6) {
		return LevelConfig.Xp.lvl07;
	} else if (level == 7) {
		return LevelConfig.Xp.lvl08;
	} else if (level == 8) {
		return LevelConfig.Xp.lvl09;
	} else if (level == 9) {
		return LevelConfig.Xp.lvl10;
	}else if (level == 10) {
		return "infini"; //infini sans t
	}
};	
