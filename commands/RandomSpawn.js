const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.channel.send("zegmkergmk");
    if(message.channel.name == "🌎random-spawn🌎") {
      number = 19;
      var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
      switch(random) {
        case 1 : message.channel.send(`${message.message.user} Votre spawn : **Junk Function**`);
        case 2 : message.channel.send(`${message.message.user} Votre spawn : **Haunted Hills**`);
        case 3 : message.channel.send(`${message.message.user} Votre spawn : **Pleasant Park**`);
        case 4 : message.channel.send(`${message.message.user} Votre spawn : **Lazy Links**`);
        case 5 : message.channel.send(`${message.message.user} Votre spawn : **Tilted Towers**`);
        case 6 : message.channel.send(`${message.message.user} Votre spawn : **Snobby shores**`);
        case 7 : message.channel.send(`${message.message.user} Votre spawn : **Shifty Shafts**`);
        case 8 : message.channel.send(`${message.message.user} Votre spawn : **Polar Peak**`);
        case 9 : message.channel.send(`${message.message.user} Votre spawn : **Frosty Flights**`);
        case 10 : message.channel.send(`${message.message.user} Votre spawn : **Happy Hamlet**`);
        case 11 : message.channel.send(`${message.message.user} Votre spawn : **Lucky Landing**`);
        case 12 : message.channel.send(`${message.message.user} Votre spawn : **Fatal Fields**`);
        case 13 : message.channel.send(`${message.message.user} Votre spawn : **Paradise Palms**`);
        case 14 : message.channel.send(`${message.message.user} Votre spawn : **Salty Springs**`);
        case 15 : message.channel.send(`${message.message.user} Votre spawn : **Retail Row**`);
        case 16 : message.channel.send(`${message.message.user} Votre spawn : **Dusty Divot**`);
        case 17 : message.channel.send(`${message.message.user} Votre spawn : **Lonely Lodge**`);
        case 18 : message.channel.send(`${message.message.user} Votre spawn : **Wailing Woods**`);
        case 19 : message.channel.send(`${message.message.user} Votre spawn : **The Block**`);
        case 19 : message.channel.send(`${message.message.user} Votre spawn : **Tomato Temple**`);

      }
}
}

module.exports.help = {
  name: "spawn"
}
