const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(message.channel.name == "🌎random-spawn🌎") {
      number = 19;
      random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
      switch(random) {
        case 1 : message.channel.send(`${message.member.user} Votre spawn : **Junk Function**`)return;
        case 2 : message.channel.send(`${message.member.user} Votre spawn : **Haunted Hills**`)return;
        case 3 : message.channel.send(`${message.member.user} Votre spawn : **Pleasant Park**`)return;
        case 4 : message.channel.send(`${message.member.user} Votre spawn : **Lazy Links**`)return;
        case 5 : message.channel.send(`${message.member.user} Votre spawn : **Tilted Towers**`)return;
        case 6 : message.channel.send(`${message.member.user} Votre spawn : **Snobby shores**`)return;
        case 7 : message.channel.send(`${message.member.user} Votre spawn : **Shifty Shafts**`)return;
        case 8 : message.channel.send(`${message.member.user} Votre spawn : **Polar Peak**`)return;
        case 9 : message.channel.send(`${message.member.user} Votre spawn : **Frosty Flights**`)return;
        case 10 : message.channel.send(`${message.member.user} Votre spawn : **Happy Hamlet**`)return;
        case 11 : message.channel.send(`${message.member.user} Votre spawn : **Lucky Landing**`)return;
        case 12 : message.channel.send(`${message.member.user} Votre spawn : **Fatal Fields**`)return;
        case 13 : message.channel.send(`${message.member.user} Votre spawn : **Paradise Palms**`)return;
        case 14 : message.channel.send(`${message.member.user} Votre spawn : **Salty Springs**`)return;
        case 15 : message.channel.send(`${message.member.user} Votre spawn : **Retail Row**`)return;
        case 16 : message.channel.send(`${message.member.user} Votre spawn : **Dusty Divot**`)return;
        case 17 : message.channel.send(`${message.member.user} Votre spawn : **Lonely Lodge**`)return;
        case 18 : message.channel.send(`${message.member.user} Votre spawn : **Wailing Woods**`)return;
        case 19 : message.channel.send(`${message.member.user} Votre spawn : **The Block**`)return;
        case 19 : message.channel.send(`${message.member.user} Votre spawn : **Tomato Temple**`) return;

      }
}
}

module.exports.help = {
  name: "spawn"
}
