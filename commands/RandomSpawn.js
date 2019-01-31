const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(message.channel.name == "🌎random-spawn🌎") {
      number = 19;
      random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
      switch(random) {
        case 1 : message.channel.send(`${message.member.user} Votre spawn : **Junk Function**`); break;
        case 2 : message.channel.send(`${message.member.user} Votre spawn : **Haunted Hills**`);break;
        case 3 : message.channel.send(`${message.member.user} Votre spawn : **Pleasant Park**`);break;
        case 4 : message.channel.send(`${message.member.user} Votre spawn : **Lazy Links**`);break;
        case 5 : message.channel.send(`${message.member.user} Votre spawn : **Tilted Towers**`);break;
        case 6 : message.channel.send(`${message.member.user} Votre spawn : **Snobby shores**`);break;
        case 7 : message.channel.send(`${message.member.user} Votre spawn : **Shifty Shafts**`);break;
        case 8 : message.channel.send(`${message.member.user} Votre spawn : **Polar Peak**`);break;
        case 9 : message.channel.send(`${message.member.user} Votre spawn : **Frosty Flights**`);break;
        case 10 : message.channel.send(`${message.member.user} Votre spawn : **Happy Hamlet**`);break;
        case 11 : message.channel.send(`${message.member.user} Votre spawn : **Lucky Landing**`);break;
        case 12 : message.channel.send(`${message.member.user} Votre spawn : **Fatal Fields**`);break;
        case 13 : message.channel.send(`${message.member.user} Votre spawn : **Paradise Palms**`);break;
        case 14 : message.channel.send(`${message.member.user} Votre spawn : **Salty Springs**`);break;
        case 15 : message.channel.send(`${message.member.user} Votre spawn : **Retail Row**`);break;
        case 16 : message.channel.send(`${message.member.user} Votre spawn : **Dusty Divot**`);break;
        case 17 : message.channel.send(`${message.member.user} Votre spawn : **Lonely Lodge**`);break;
        case 18 : message.channel.send(`${message.member.user} Votre spawn : **Wailing Woods**`);break;
        case 19 : message.channel.send(`${message.member.user} Votre spawn : **The Block**`);break;
        case 19 : message.channel.send(`${message.member.user} Votre spawn : **Tomato Temple**`);break;

      }
}
}

module.exports.help = {
  name: "spawn"
}
