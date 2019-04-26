const Discord = require("discord.js");
module.exports = class HelpCommand {
    constructor() {
        this.name = "shutdown",
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
	
	message.channel.send({embed});
	bot.users.get("184730747079229441").send({embed});
	bot.users.get("195159794636685313").send({embed});
	
	function myFunc() {
  		process.exit();
	}

	setTimeout(myFunc, 3000);
	
		
	    } else {
	return;
	    }
    } else {
        const embed = new Discord.RichEmbed()
	.setTitle("Shutdown Bot")
	.setAuthor("Zayn", "https://media.discordapp.net/attachments/566329831667793920/569607425364066314/unknown.png")

	.setColor(0x00AE86)
	.setFooter("Créer par Zayn", "https://media.discordapp.net/attachments/566329831667793920/569607425364066314/unknown.png")
	.setThumbnail("http://media.topito.com/wp-content/uploads/2016/01/heart-eyes-emoji.jpg")
	.setDescription("Je te connais par toi, retourne d'où tu viens!")
	
        message.channel.send({embed});    
}
