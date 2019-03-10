//Discord API
const Discord = require("discord.js");
const client = new Discord.Client();

const { CommandHandler } = require("djs-commands")
const CH = new CommandHandler({
    folder: __dirname + '/commands/',
    alias: ['t'],
    prefix: ['a!']
  });

client.on("ready", () => {
    console.log(`Bot online`);
});

client.on("message", (message) => {
  if(message.channel.type === 'dm') return;
  if(message.author.type === 'bot') return;
  //if(message.author.id !== '184730747079229441') return;
  let args = message.content.split(" ");
  let command = args[0];
  let cmd = CH.getCommand(command);
  if(!cmd) return;

  try{
      cmd.run(client,message,args)
  }catch(e){
      console.log(e)
  }
});

const token = process.env.token;
client.login(token);























































/*
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

  bot.user.setGame("Mp for support ! ", 'https://twitter.com/ZaynMC_YT');

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
             let users = bot.users.find("username", user.username);
             if(reaction.count > 17) {
               reaction.remove(user);
               users.send("Le tournoi est complet !");
               return;
             }
             console.log('ADD TOURNOI TO ' + user.username);
             let role = reaction.message.guild.roles.find(r => r.name === "JOUEUR TOURNOIS");

             role.setMentionable(true, 'Role needs to be pinged')
             .then(updated => console.log(`Role mentionable: ${updated.mentionable}`))
             .catch(console.error);

             // Set the position of the role
             role.setPosition(8)
             .then(updated => console.log(`Role position: ${updated.position}`))
             .catch(console.error);

               console.log(`Nope, noppers, nadda.`);
               //user.client.message.guild.member.addRole('540121484690194432').catch(console.error);
               //once you've found the user you can get the id (or you can write .id after the find method)
               let id = users.id;
               let member = reaction.message.member.guild.members.get(id);
               member.addRole(role);

               users.send(`Bonjour ${users} !\n\nVotre inscription au tournoi solo à été bien pris en compte !`);

           }
         }

        
     }
   });

bot.on('messageReactionRemove', (reaction, user) => {

  if(reaction.message.channel.name == "🌀annonce-tournoi-solo"){
    if(reaction.emoji.name == "✅"){
      let users = bot.users.find("username", user.username);
      console.log('REMOVE TOURNOI TO ' + user.username);
      let role = reaction.message.guild.roles.find(r => r.name === "JOUEUR TOURNOIS");

        console.log(`Nope, noppers, nadda.`);
        //user.client.message.guild.member.addRole('540121484690194432').catch(console.error);
        //once you've found the user you can get the id (or you can write .id after the find method)
        let id = users.id;
        let member = reaction.message.member.guild.members.get(id);
        member.removeRole(role);
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


});*/
