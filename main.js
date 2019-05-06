const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const path = require("path");
const mysql = require("mysql");
const dotenv = require('dotenv');
const db = require('quick.db');
const shop = require('./CronFile/shop.js');
let cooldown = new Set();
let cdseconds = 20;

dotenv.config();

const { CommandHandler } = require("djs-commands")
const CH = new CommandHandler({
    folder: __dirname + '/commands/',
    prefix: ['a!','!', 'e!','']  
  });

  const serverStats = {
    guildID: '511250353430462465',
    totalUsersID: '511251090097045526',
    memberCountID: '511251296054149141',
    botCountID: '511251340119244841'
  }

  client.on("ready", async () => {

    client.user.setActivity("Faire obéir à mon maître (@ZaynMC_YT)", {type: "STREAMING"});

  });

client.on("ready", () => {
    console.log(`Bot online`);
    const Config = require("./config.json");
    console.log(`Version : ` + Config.version.number);

    fs.readdirSync(path.join(__dirname, "events")).forEach(function(file) {
      require('./events/' + file)(client);
    });
  });

var mysql_pool = mysql.createPool({
  connectionLimit : 100,
  host: "phpmyadmin.as2pik.ovh",
  user: "Ascalon",
  password: "bIxldJxnSF6KaQvv",
  database: "ascalonbot" 
});

function generateXP() {
  let min = 15;
  let max = 30;
  return Math.floor(Math.random() * (max - min + 1)) + 5;
}

client.on("message", async message => {
  if(message.channel.type === 'dm') return;
  if(message.author.bot) return;
  if (!cooldown.has(message.author.id)) {
    try {
        cooldown.add(message.author.id);
        mysql_pool.getConnection(function(err, connection) {
            if (err) {
                connection.release();
                console.log(' Error getting mysql_pool connection: ' + err);
                throw err;
            }
            connection.query(`SELECT * FROM xp WHERE id = '${message.author.id}'`, (err, rows) => {
              if(err) {
                  connection.release();
                  console.log(err);
              } else {
                  let sql;

                  if(rows.length < 1) {
                      sql = `INSERT INTO xp (id, xp) VALUES ('${message.author.id}', ${generateXP()})`
                  } else {
                    let xp = rows[0].xp;
                    let level = rows[0].level;

                    xp = xp + generateXP();

                    sql = `UPDATE xp SET xp =${xp}, level =${NewLevel(xp, message, level)} WHERE id = '${message.author.id}'`    

                  }
                  connection.query(sql)
                  connection.release();
              }
          })
        })
        setTimeout(() => {
            cooldown.delete(message.author.id)
        }, cdseconds * 1000)

      }catch(e){
        console.log(e)
    }
      }

  let args = message.content.split(" ");
  let command = args[0];
  let cmd = CH.getCommand(command);
  if(!cmd) return;
 
  try{
      cmd.run(client,message,args, mysql_pool)
  }catch(e){
      console.log(e)
  }

});


client.on("message", async message => {

  let recrutementteam = [`Nom de l'équipe`, 'Plateforme','Âge minimum','Rôles disponibles','Objectif','K/D minimum', 'Nombre de top1 minimum']
  let noFound = false;

  //CHANNEL RECRUTEMENT TEAM
  if(message.channel.id == "501869668919803904") {
    if(message.member.hasPermissions("ADMINISTRATOR")) {
        return;
    }

    for (var i in recrutementteam) {
    if (!message.content.toLowerCase().includes(recrutementteam[i].toLowerCase())) noFound = true;
  }
    if(noFound) {
      message.delete();

      message.author.send("Bonjour !\n \nVotre message dans le channel <#501869668919803904> ne respecte pas le modèle donné\n \nNous t'invitons à respecter le modèle ci-dessous lors de votre prochain post\n \n __Voici le formulaire à respecter pour publier son annonce : __ \n```Nom de l'équipe (avec brève description mais facultatif) :\nPlateforme :\nÂge minimum (indiquer l'âge minimum si nécessaire) :\nRôles disponibles (joueur, coach, modérateur, manager,etc...) :\nObjectif (snipe, tournoi, fun, ...) :\nK/D minimum (indiquer le K/D minimum si nécessaire) :```\n \nÂ bientôt !");
      return;
    }
    message.react("✅")
  }

});


client.on("message", async message => {

  if(message.author.bot) return;

  if(message.channel.type !== 'text') {

    let active = await db.fetch(`support_${message.author.id}`);

    let guild = client.guilds.get('473833367029153794');

    let channel, found = true;

    try {
      if(active) client.channels.get(active.channelID).guild;
    }catch(e) {
      found = false;
    }

    if(!active || !found) {

      active = {};

      channel = await guild.createChannel(`${message.author.username}-${message.author.discriminator}`);
      await channel.setParent("531463499550031882");
      await channel.lockPermissions();

      let author = message.author;

      const newChannel = new Discord.RichEmbed()
      .setColor(0x36393e)
      .setAuthor(author.tag)
      .setFooter('Support Ticket Created')
      .addField('User', author)
      .addField('ID', author.id)

      await channel.send(newChannel);

      author.send(":flag_mf: Merci d'avoir contacté le support ! Un membre du staff va vous contacter dans les plus brefs délais \n:flag_lr: Thank you for contacting the support ! A member of the staff will contact you as soon as possible");

      active.channelID = channel.id;
      active.targetID = author.id;

    }


    channel = client.channels.get(active.channelID);

   // message.author.send(":flag_mf: Votre message a été envoyé \n:flag_lr: Your message has been sent");

    const embed = new Discord.RichEmbed()
    .setColor(0x36393e)
    .setAuthor(message.author.tag)
    .setDescription(message.content)
    .setFooter(`Message Recieved -- ${message.author.tag}`)

    await channel.send(embed);

    db.set(`support_${message.author.id}`, active);
    db.set(`supportChannel_${channel.id}`, message.author.id);
    return;
  }

  let support = await db.fetch(`supportChannel_${message.channel.id}`);

  if(support) {

    support = await db.fetch(`support_${support}`);

    let supportUser = client.users.get(support.targetID);
    if(!supportUser) return message.channel.delete();

    if(message.content.toLowerCase() == "?ban") {

      message.channel.delete();

      db.delete(`support_${support.targetID}`);
      message.guild.member(supportUser).ban("Troll bot / Invite Discord");
      return;

    }

    if(message.content.toLowerCase() == '?complete') {

        message.channel.delete();

        db.delete(`support_${support.targetID}`);
        return;
        }

    client.users.get(support.targetID).send(`**${message.member.displayName}** : ${message.content}`)
    message.delete();


    return message.channel.send(`**${message.member.displayName}** : ${message.content}`);
  }
  });

  client.on('error', console.error);

  

  var CronJob = require('cron').CronJob;
  new CronJob('50 1 2 * * *', function() {
    try{
      shop.shop(client);
    }catch(e){
      console.log(e)
    }

  }, null, true, 'Europe/Paris');

  function NewLevel(xp, message , level) {

    const LevelConfig = require("./ConfigLevel.json");

    let lvl1 = LevelConfig.Roles.lvl01;
    let lvl2 = LevelConfig.Roles.lvl02;
    let lvl3 = LevelConfig.Roles.lvl03;
    let lvl4 = LevelConfig.Roles.lvl04;
    let lvl5 = LevelConfig.Roles.lvl05;
    let lvl6 = LevelConfig.Roles.lvl06;
    let lvl7 = LevelConfig.Roles.lvl07;
    let lvl8 = LevelConfig.Roles.lvl08;
    let lvl9 = LevelConfig.Roles.lvl09;
    let lvl10 = LevelConfig.Roles.lvl10;

    if (xp > LevelConfig.Xp.lvl01 && xp < LevelConfig.Xp.lvl02) {
      if (level != "1") {
        message.member.addRole(lvl1);
        message.member.send("Vous venez de passez le level 1");
      }
      return "1";
    } else if (xp > LevelConfig.Xp.lvl02 && xp < LevelConfig.Xp.lvl03) {
      if (level != "2") {
        message.member.addRole(lvl2);
        message.member.send("Vous venez de passez le level 2");
      }
      return "2";
    } else if (xp > LevelConfig.Xp.lvl03 && xp < LevelConfig.Xp.lvl04) {
      if (level != "3") {
        message.member.addRole(lvl3);
        message.member.send("Vous venez de passez le level 3");
      }
      return "3";
    } else if (xp > LevelConfig.Xp.lvl04 && xp < LevelConfig.Xp.lvl05) {
      if (level != "4") {
        message.member.addRole(lvl4);
        message.member.send("Vous venez de passez le level 4");
      }
      return "4";
    } else if (xp > LevelConfig.Xp.lvl05 && xp < LevelConfig.Xp.lvl06) {
      if (level != "5") {
        message.member.addRole(lvl5);
        message.member.send("Vous venez de passez le level 5");
      }
      return "5";
    } else if (xp > LevelConfig.Xp.lvl06 && xp < LevelConfig.Xp.lvl07) {
      if (level != "6") {
        message.member.addRole(lvl6);
        message.member.send("Vous venez de passez le level 6");
      }
      return "6";
    } else if (xp > LevelConfig.Xp.lvl07 && xp < LevelConfig.Xp.lvl08) {
      if (level != "7") {
        message.member.addRole(lvl7);
        message.member.send("Vous venez de passez le level 7");
      }
      return "7";
    } else if (xp > LevelConfig.Xp.lvl08 && xp < LevelConfig.Xp.lvl9) {
      if (level != "8") {
        message.member.addRole(lvl8);
        message.member.send("Vous venez de passez le level 8");
      }
      return "8";
    } else if (xp > LevelConfig.Xp.lvl09 && xp < LevelConfig.Xp.lvl10) {
      if (level != "9") {
        message.member.addRole(lvl9);
        message.member.send("Vous venez de passez le level 9");
      }
      return "9";
    } else if (xp > LevelConfig.Xp.lvl10) {
      if (level != "10") {
        message.member.addRole(lvl10);
        message.member.send("Vous venez de passez le level 10");
      }
      return "10";
    } else {
      return "0";
    }
  };

  //client.login("NTcxMjg1OTc4MzY3MzkzNzky.XMgv8A.4hJ4Kki2-BudbU_dqM6EZWig59o");
client.login(process.env.TOKEN);
