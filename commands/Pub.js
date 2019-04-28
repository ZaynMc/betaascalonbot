module.exports = class HelpCommand {
    constructor() {
        this.name = "pub",
        this.alias = [""],
        this.usage = "a!pub"
    }

    run(bot, message, args) {

        message.delete();

        const embed = new Discord.RichEmbed()
        .setTitle("Pub Synopsis")
        .setAuthor("Synopsis", "")

        .setColor(0x00AE86)
        .setFooter("Sysnopsis", "")

        .setDescription(":wave::skin-tone-1:Bonsoir/Bonsoir:wave::skin-tone-1: /n Nous sommes la synopsis E-sport , celle qui a gagner le tournois pp Ascalon /n et nous aimerions agrandir notre communautée ! /n :comet:️Pour cela nous allons vous décrire notre serveur !:comet:️ /n Tout d'abord la synopsis reprend après de long mois d'inactivité et nous sommes désormais plus fort que jamais ! /n Si vous voulez nous soutenir ou participer à nos Tournois pp  rejoignez donc notre serveur https://discord.gg/WdNm7Se /n Nous aimerions dépasser les 500 membres d'ici peu alors venez réaliser notre objectif ! /n :boom:Ici tu pourras participer a nos tournois jouer avec la team voir même la rejoindre si possible !:boom: /n Nous avons aussi une chaine youtube (pour l'instant vierge) mais le contenue arrivera d'ici peu ! /n /n Juste pour prévenir , nos objetcifs sont de pouvoir passer sous loi 1901 (ce qui arrivera bientot) et organiser de gros tournois ! /n :emoji_22: On organise aussi des giveway pour pouvoir faire plaisir à notre communauté !:emoji_22: /n /n J'éspères que cette mise en bouche de notre team vous auras plus on vous attend bien évidemment avec impatience ! /n :CatDance: (On recherche staff , coach et manager !) /n")

         message.channel.send({embed});
        
    }
}
