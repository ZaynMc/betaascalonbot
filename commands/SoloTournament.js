module.exports = class SoloTournament {
    constructor() {
        this.name = "solo",
        this.alias = ['so', 'tournoisolo'],
        this.usage = "a!solo"
    }

    run(bot, message, args) {
        //ow = message.channel.permissionOverwrites.get("541008951005806605");
        //if(ow.ADD_REACTIONS === true) return;

       /* message.channel.send('Lancement du processus de tournoi').then(async message => {

            setTimeout(() => {
                message.edit("**Préparation du tournoi dans** : ``20 secondes`` • □□□□□□□□□□ - 0%");
            }, 1000);
            setTimeout(() => {
                message.edit("**Préparation du tournoi dans** : `` 10 secondes`` • ■■■■■□□□□□ - 50%");
            }, 10000);
            setTimeout(() => {
                message.edit("**Lancement préparation tournoi** • ■■■■■■■■■■ - 100%");
            }, 200000);
        });*/

        const filter = m => m.author.id == message.author.id;
  message.reply("Choissez la date (exemple : 01/01/2000)").then(r => delete(10000));
  message.channel.awaitMessages(filter, {max: 1,time: 10000})
  .then(collected => {

    if(collected.first().content == "cancel") return;

    message.reply("Choissez l'heure (exemple : 15h60)").then(r => delete(10000));

    message.channel.awaitMessages(filter, {max: 1,time:10000})
    .then(collected1 => {
        
        if(collected1.first().content == "cancel") return;

        let heure = collected1.first().content;
        let date = collected.first().content;

        let role = message.guild.roles.find(r => r.name === "@everyone");

        const solotournoi = message.member.guild.channels.find('name', '👑dirigeant');
      solotournoi.send(`📣 ANNONCE TOURNOI 📣 [${role}]\nMode : **SOLO**\nPlatforme : **TOUS [Pc, Xbox, PS4]**\nDate du tournoi : ${date} à ${heure} \n \nComment s'inscire ? Il suffit juste de réagir avec cette réaction ✅ au message !\n \n\n \n Rendez-vous le ${date} à ${heure} dans le channel "📣 Vocal Tournoi"`).then(msg => {
          msg.react("✅");
            });
        });
        
    });
        
    }
    }