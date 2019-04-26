module.exports = class HelpCommand {
    constructor() {
        this.name = "stop",
        this.alias = [],
        this.usage = ""
    }

run(bot, message, args) {
	    
	console.log("test1);

        if(message.author.id == 195159794636685313 || message.author.id == 184730747079229441) {

	console.log("test2);
	const embed = new Discord.RichEmbed()
	.setTitle("Shutdown Bot")
	.setAuthor("Thibaut Black and Zayn", "https://media.discordapp.net/attachments/566329831667793920/569607425364066314/unknown.png")

	.setColor(0x00AE86)
	.setFooter("Créer par Thibaut Black and Zayn", "https://media.discordapp.net/attachments/566329831667793920/569607425364066314/unknown.png")
	.setThumbnail("https://i.imgur.com/3ubvmFE.png")
	.setDescription('Shutdown du bot en cours')

	.addField("Shudown Initiateur",message.author.username, true)

	message.channel.send({embed});

	var Zayn = bot.fetchUser(184730747079229441);
	var Thibaut = bot.fetchUser(195159794636685313);

	Zayn.send({embed});
	Thibaut.send({embed});

	process.exit();
		
	    } else {
	return;
	    }
    }
}
