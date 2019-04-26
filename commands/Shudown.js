const Discord = require("discord.js");
module.exports = class HelpCommand {
    constructor() {
        this.name = "stop",
        this.alias = [],
        this.usage = ""
    }

run(bot, message, args) {

        if(message.author.id == 195159794636685313 || message.author.id == 184730747079229441) {

	const embed = new Discord.RichEmbed()
	.setTitle("Shutdown Bot")
	.setAuthor("Thibaut Black and Zayn", "https://media.discordapp.net/attachments/566329831667793920/569607425364066314/unknown.png")

	.setColor(0x00AE86)
	.setFooter("Créer par Thibaut Black and Zayn", "https://media.discordapp.net/attachments/566329831667793920/569607425364066314/unknown.png")
	.setThumbnail("https://i.imgur.com/3ubvmFE.png")
	.setDescription('Shutdown du bot en cours')

	.addField("Shudown Initiateur",message.author.username, true)
	try {
		await message.channel.send({embed});
		await bot.users.get("184730747079229441").send({embed});
		await bot.users.get("195159794636685313").send({embed});
	} catch(e) {
		message.channel.send(`ERROR : ${e.message}`)
	}

	//process.exit();
		
	    } else {
	return;
	    }
    }
}
