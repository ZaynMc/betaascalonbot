
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

       if (user.id !== bot.user.id) {

         if(reaction.message.channel.name == "🌀annonce-tournoi-solo"){
           if(reaction.emoji.name == "✅"){
             console.log('ADD TOURNOI TO ' + user.username);
             let role = reaction.message.guild.roles.find(r => r.name === "JOUEUR TOURNOIS");

             role.setMentionable(true, 'Role needs to be pinged')
             .then(updated => console.log(`Role mentionable: ${updated.mentionable}`))
             .catch(console.error);
               console.log(`Nope, noppers, nadda.`);
               //user.client.message.guild.member.addRole('540121484690194432').catch(console.error);
               let users = bot.users.find("username", user.username);
               //once you've found the user you can get the id (or you can write .id after the find method)
               let id = users.id;
               let member = reaction.message.member.guild.members.get(id);
               member.addRole(role);

           }
         }

         if(reaction.message.channel.name == "📛règlement📛"){
           if(reaction.emoji.name == "✅"){
             console.log('VERIFIED BY ASCALON BOT ' + user.username);
             let roleID = "541008951005806605";
             let role = reaction.message.guild.roles.find(r => r.name === "VERIFIED BY ASCALON BOT");
               console.log(`Nope, noppers, nadda.`);
               //user.client.message.guild.member.addRole('540121484690194432').catch(console.error);
               let users = bot.users.find("username", user.username);
               //once you've found the user you can get the id (or you can write .id after the find method)
               let id = users.id;
               let member = reaction.message.member.guild.members.get(id);
               member.addRole(role);
             }

         }

         //FOR ROLE
         if(reaction.message.channel.name == "📕rôles"){

           switch(reaction.emoji.name) {

             case "xbox":
             console.log('xbox ' + user.username);
             let role1 = reaction.message.guild.roles.find(r => r.name === "XBOX");
             let users1 = bot.users.find("username", user.username);
             let id1 = users1.id;

             let member1 = reaction.message.member.guild.members.get(id1);
             member1.addRole(role1);
             break;

             case "ps4":
             let role2 = reaction.message.guild.roles.find(r => r.name === "PS4");
               console.log(`Nope, noppers, nadda.`);
               let users2 = bot.users.find("username", user.username);
               let id2 = users2.id;

               let member2 = reaction.message.member.guild.members.get(id2);
               member2.addRole(role2);
             break;

             case "switch":
              let role3 = reaction.message.guild.roles.find(r => r.name === "SWITCH");
               console.log(`Nope, noppers, nadda.`);
               let users3 = bot.users.find("username", user.username);
               //user.client.message.guild.member.addRole('540121484690194432').catch(console.error);
               //once you've found the user you can get the id (or you can write .id after the find method)
               let id3 = users3.id;
               let member3 = reaction.message.member.guild.members.get(id3);
               member3.addRole(role3);
             break;

             case "pc":
             let role4 = reaction.message.guild.roles.find(r => r.name === "PC");
               console.log(`Nope, noppers, nadda.`);
               let users4 = bot.users.find("username", user.username);
               //user.client.message.guild.member.addRole('540121484690194432').catch(console.error);
               //once you've found the user you can get the id (or you can write .id after the find method)
               let id4 = users4.id;
               let member4 = reaction.message.member.guild.members.get(id4);
               member4.addRole(role4);
             break;

             case "mobile":
             let role5 = reaction.message.guild.roles.find(r => r.name === "Mobile");
               console.log(`Nope, noppers, nadda.`);
               let users5 = bot.users.find("username", user.username);
               //user.client.message.guild.member.addRole('540121484690194432').catch(console.error);
               //once you've found the user you can get the id (or you can write .id after the find method)
               let id5 = users5.id;
               let member5 = reaction.message.member.guild.members.get(id5);
               member5.addRole(role5);

               case "🔨":
               let role6 = reaction.message.guild.roles.find(r => r.name === "Mode Créatif");
                 console.log(`Nope, noppers, nadda.`);
                 let users6 = bot.users.find("username", user.username);
                 //user.client.message.guild.member.addRole('540121484690194432').catch(console.error);
                 //once you've found the user you can get the id (or you can write .id after the find method)
                 let id6 = users6.id;
                 let member6 = reaction.message.member.guild.members.get(id6);
                 member6.addRole(role6);
               break;

               case "🏹":
               let role7 = reaction.message.guild.roles.find(r => r.name === "Battle Royale");
                 console.log(`Nope, noppers, nadda.`);
                 let users7 = bot.users.find("username", user.username);
                 //user.client.message.guild.member.addRole('540121484690194432').catch(console.error);
                 //once you've found the user you can get the id (or you can write .id after the find method)
                 let id7 = users7.id;
                 let member7 = reaction.message.member.guild.members.get(id7);
                 member7.addRole(role7);
               break;

                }
              }
     }
   });

bot.on('messageReactionRemove', (reaction, user) => {

  if(reaction.message.channel.name == "📛règlement📛"){
    if(reaction.emoji.name == "✅"){
      console.log('VERIFIED BY ASCALON BOT ' + user.username);
      let roleID = "541008951005806605";
      let role = reaction.message.guild.roles.find(r => r.name === "VERIFIED BY ASCALON BOT");
        console.log(`Nope, noppers, nadda.`);
        //user.client.message.guild.member.addRole('540121484690194432').catch(console.error);
        let users = bot.users.find("username", user.username);
        //once you've found the user you can get the id (or you can write .id after the find method)
        let id = users.id;
        let member = reaction.message.member.guild.members.get(id);
        member.removeRole(role);

  }
  }

  if(reaction.message.channel.name == "📕rôles"){
    console.log('a reaction has been added');

    //XBOX
    if(reaction.emoji.name == "xbox"){
      console.log('xbox ' + user.username);
      let roleID = "540121484690194432";
      let role = reaction.message.guild.roles.find(r => r.name === "XBOX");

        console.log(`Nope, noppers, nadda.`);
        //user.client.message.guild.member.addRole('540121484690194432').catch(console.error);
        let users = bot.users.find("username", user.username);
        //once you've found the user you can get the id (or you can write .id after the find method)
        let id = users.id;

        let member = reaction.message.member.guild.members.get(id);
        member.removeRole(role);

  }

  if(reaction.emoji.name == "ps4"){
    console.log('ps4 ' + user.username);
    let roleID = "540121221971443714";
    let role = reaction.message.guild.roles.find(r => r.name === "PS4");
      console.log(`Nope, noppers, nadda.`);
      //user.client.message.guild.member.addRole('540121484690194432').catch(console.error);
      let users = bot.users.find("username", user.username);
      //once you've found the user you can get the id (or you can write .id after the find method)
      let id = users.id;

      let member = reaction.message.member.guild.members.get(id);
      member.removeRole(role);

}

if(reaction.emoji.name == "switch"){
  console.log('switch ' + user.username);
  let roleID = "540121715506806785";
  let role = reaction.message.guild.roles.find(r => r.name === "SWITCH");
    console.log(`Nope, noppers, nadda.`);
    //user.client.message.guild.member.addRole('540121484690194432').catch(console.error);
    let users = bot.users.find("username", user.username);
    //once you've found the user you can get the id (or you can write .id after the find method)
    let id = users.id;

    let member = reaction.message.member.guild.members.get(id);
    member.removeRole(role);

}


if(reaction.emoji.name == "pc"){
console.log('pc ' + user.username);
let roleID = "540121554374361099";
let role = reaction.message.guild.roles.find(r => r.name === "PC");
  console.log(`Nope, noppers, nadda.`);
  //user.client.message.guild.member.addRole('540121484690194432').catch(console.error);
  let users = bot.users.find("username", user.username);
  //once you've found the user you can get the id (or you can write .id after the find method)
  let id = users.id;

  let member = reaction.message.member.guild.members.get(id);
  member.removeRole(role);

}

if(reaction.emoji.name == "mobile"){
console.log('mobile ' + user.username);
let roleID = "540121685064417280";
let role = reaction.message.guild.roles.find(r => r.name === "Mobile");
  console.log(`Nope, noppers, nadda.`);
  //user.client.message.guild.member.addRole('540121484690194432').catch(console.error);
  let users = bot.users.find("username", user.username);
  //once you've found the user you can get the id (or you can write .id after the find method)
  let id = users.id;

  let member = reaction.message.member.guild.members.get(id);
  member.removeRole(role);

 }

 if(reaction.emoji.name == "mobile"){
   console.log('mobile ' + user.username);
   let roleID = "540121685064417280";
   let role = reaction.message.guild.roles.find(r => r.name === "Mobile");
     console.log(`Nope, noppers, nadda.`);
     //user.client.message.guild.member.addRole('540121484690194432').catch(console.error);
     let users = bot.users.find("username", user.username);
     //once you've found the user you can get the id (or you can write .id after the find method)
     let id = users.id;

     let member = reaction.message.member.guild.members.get(id);
     member.removeRole(role);

 }

 if(reaction.emoji.name == "🔨") {
   console.log('creatif ' + user.username);
   let roleID = "541003784281915392";
   let role = reaction.message.guild.roles.find(r => r.name === "Mode Créatif");
     console.log(`Nope, noppers, nadda.`);
     //user.client.message.guild.member.addRole('540121484690194432').catch(console.error);
     let users = bot.users.find("username", user.username);
     //once you've found the user you can get the id (or you can write .id after the find method)
     let id = users.id;

     let member = reaction.message.member.guild.members.get(id);
     member.removeRole(role);

 }

 if(reaction.emoji.name == "🏹") {
   console.log('BATTLEROYALE ' + user.username);
   let roleID = "541004019909525582";
   let role = reaction.message.guild.roles.find(r => r.name === "Battle Royale");
     console.log(`Nope, noppers, nadda.`);
     //user.client.message.guild.member.addRole('540121484690194432').catch(console.error);
     let users = bot.users.find("username", user.username);
     //once you've found the user you can get the id (or you can write .id after the find method)
     let id = users.id;
     let member = reaction.message.member.guild.members.get(id);
     member.removeRole(role);
   }
  }


});

  bot.login(token);
