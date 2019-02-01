
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});

const token = process.env.token;

const size = 12;
const rainbow = new Array(size);

for (var i=0; i<size; i++) {
  var red   = sin_to_hex(i, 0 * Math.PI * 2/3); // 0   deg
  var blue  = sin_to_hex(i, 1 * Math.PI * 2/3); // 120 deg
  var green = sin_to_hex(i, 2 * Math.PI * 2/3); // 240 deg

  rainbow[i] = '#'+ red + green + blue;
}

function sin_to_hex(i, phase) {
  var sin = Math.sin(Math.PI / size * 2 * i + phase);
  var int = Math.floor(sin * 127) + 128;
  var hex = int.toString(16);

  return hex.length === 1 ? '0'+hex : hex;
}

let place = 0;


function changeColor() {
  for (let index = 0; index < 1; ++index) {
    bot.guilds.get("539552660806696988").roles.find('name', "Raimbow").setColor(rainbow[place])
		.catch(console.error);
    if(place == (size - 1)){
      place = 0;
    }else{
      place++;
    }
  }
}

// Load commands
bot.commands = new Discord.Collection();
fs.readdir("./commands/", (err, files) => {
  if (err) console.error(err);
  let jsfiles = files.filter(f => f.split(".").pop() === "js");

  if (jsfiles.length <= 0) return console.log("There are no commands to load...");

  console.log(`Loading ${jsfiles.length} commands...`);
  jsfiles.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${i + 1}: ${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {

    console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);

  //setInterval(changeColor, 1);

});
bot.on("message", async message => {
  //if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = "a!";
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
});

bot.on('guildMemberAdd', member => {
  let embed = new Discord.RichEmbed()
        .setColor('#33cc33')
        .setDescription(`Bienvenue ${member.user}, avant de te divertir sur ASCALON je t'invite à lire le règlement . Have Fun:tada::hugging: !`)
        .setFooter('Nous sommes désormais : ' + member.guild.memberCount)
    member.guild.channels.get('539553652960919563').send(embed);

    bot.channels.get("539553792560070668").setName(`Total Users : ${member.guild.memberCount}`); // total users
});

bot.on('guildMemberRemove', member => {
    bot.channels.get("539553792560070668").setName(`Total Users : ${member.guild.memberCount}`); // total users
});


bot.on('messageReactionAdd', (reaction, user) => {
    if(reaction.message.channel.name == "📕rôles"){
      console.log('a reaction has been added');
      if(reaction.emoji.name == "xbox"){
        console.log('xbox');
        let roleID = "540121484690194432";
        let role = reaction.message.guild.roles.find(r => r.name === "XBOX");
        if(!reaction.message.member.roles.has(roleID)) {{
          console.log(`Nope, noppers, nadda.`);
          reaction.message.member.addRole(role).catch(console.error);
        }
      }

      if(reaction.emoji.name == "ps4") {
        let roleID = "540121221971443714";
        let role = reaction.message.guild.roles.find(r => r.name === "PS4");
        if(!reaction.message.member.roles.has(roleID)) {
          console.log(`Nope, noppers, nadda.`);
          reaction.message.member.addRole(role).catch(console.error);
        }
      }

      if(reaction.emoji.name == "switch") {
        let roleID = "540121715506806785";
        let role = reaction.message.guild.roles.find(r => r.name === "SWITCH");
        if(!reaction.message.member.roles.has(roleID)) {
          console.log(`Nope, noppers, nadda.`);
          reaction.message.member.addRole(role).catch(console.error);
        }
      }

      if(reaction.emoji.name == "pc") {
        let roleID = "540121554374361099";
        let role = reaction.message.guild.roles.find(r => r.name === "PC");
        if(!reaction.message.member.roles.has(roleID)) {
          console.log(`Nope, noppers, nadda.`);
          reaction.message.member.addRole(role).catch(console.error);
        }
      }

      if(reaction.emoji.name == "mobile") {
        let roleID = "540121685064417280";
        let role = reaction.message.guild.roles.find(r => r.name === "Mobile");
        if(!reaction.message.member.roles.has(roleID)){
          console.log(`Nope, noppers, nadda.`);
          reaction.message.member.addRole(role).catch(console.error);
        }
      }
    }
}
});

bot.on('messageReactionRemove', (reaction, user) => {
  if(reaction.message.channel.name == "📕rôles"){
    console.log('a reaction has been added');

    if(reaction.emoji.name == "xbox"){
      console.log('xbox');
      let roleID = "540121484690194432";
      let role = reaction.message.guild.roles.find(r => r.name === "XBOX");
      if(reaction.message.member.roles.has(roleID)) {
        console.log(`Yay, the author of the message has the role!`);
        reaction.message.member.removeRole(role).catch(console.error);
      }
    }

    if(reaction.emoji.name == "ps4") {
      let roleID = "540121221971443714";
      let role = reaction.message.guild.roles.find(r => r.name === "PS4");
      if(reaction.message.member.roles.has(roleID)) {
        console.log(`Nope, noppers, nadda.`);
        reaction.message.member.removeRole(role).catch(console.error);
      }
    }

    if(reaction.emoji.name == "switch") {
      let roleID = "540121715506806785";
      let role = reaction.message.guild.roles.find(r => r.name === "SWITCH");
      if(reaction.message.member.roles.has(roleID)) {
        console.log(`Nope, noppers, nadda.`);
        reaction.message.member.removeRole(role).catch(console.error);
      }
    }

    if(reaction.emoji.name == "pc") {
      let roleID = "540121554374361099";
      let role = reaction.message.guild.roles.find(r => r.name === "PC");
      if(reaction.message.member.roles.has(roleID)) {
        console.log(`Nope, noppers, nadda.`);
        reaction.message.member.removeRole(role).catch(console.error);
      }
    }

    if(reaction.emoji.name == "mobile") {
      let roleID = "540121685064417280";
      let role = reaction.message.guild.roles.find(r => r.name === "Mobile");
      if(reaction.message.member.roles.has(roleID)){
        console.log(`Nope, noppers, nadda.`);
        reaction.message.member.removeRole(role).catch(console.error);
      }
    }


  }
});

  bot.login(token);
