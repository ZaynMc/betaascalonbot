const Discord = require("discord.js");

 const ms = require("ms");
 const db = require('quick.db');

 const bot = new Discord.Client({disableEveryone: true});

//TOKEN BOT
 const token = process.env.token;

 bot.on("message", async message => {

  if(message.author.bot) return;

  if(message.channel.type !== 'text') {

    let active = await db.fetch(`support_${message.author.id}`);

    let guild = bot.guilds.get('473833367029153794');

    let channel, found = true;

    try {
      if(active) bot.channels.get(active.channelID).guild;
    }catch(e) {
      found = false;
    }

    if(!active || !found) {

      active = {};

      channel = await guild.createChannel(`${message.author.username}-${message.author.discriminator}`);

      channel = await channel.setParent('531463499550031882');

      try {
            let ascalonall = guild.roles.find(`name`, "💧 Ascalon 💧");
            let moderationrole = guild.roles.find(`name`, "🌋MODERATEUR🌋");
            let respmodorole = guild.roles.find(`name`, "staff");


            channel.overwritePermissions(ascalonall, {
            CREATE_INSTANT_INVITE: false,
            KICK_MEMBERS: false,
            BAN_MEMBERS: false,
            ADMINISTRATOR: false,
            MANAGE_CHANNELS: false,
            MANAGE_GUILD: false,
            ADD_REACTIONS: false,
            VIEW_AUDIT_LOG: false,
            VIEW_CHANNEL: false,
            SEND_MESSAGES: false
          });

          channel.overwritePermissions(moderationrole, {
          CREATE_INSTANT_INVITE: true,
          KICK_MEMBERS: true,
          BAN_MEMBERS: true,
          ADMINISTRATOR: true,
          MANAGE_CHANNELS: true,
          MANAGE_GUILD: true,
          ADD_REACTIONS: true,
          VIEW_AUDIT_LOG: true,
          VIEW_CHANNEL: true,
          SEND_MESSAGES: true
        });

        channel.overwritePermissions(respmodorole, {
        CREATE_INSTANT_INVITE: true,
        KICK_MEMBERS: true,
        BAN_MEMBERS: true,
        ADMINISTRATOR: true,
        MANAGE_CHANNELS: true,
        MANAGE_GUILD: true,
        ADD_REACTIONS: true,
        VIEW_AUDIT_LOG: true,
        VIEW_CHANNEL: true,
        SEND_MESSAGES: true
      });

        } catch(e){
          console.log(e.stack);
        }

      let author = message.author;

      const newChannel = new Discord.RichEmbed()
      .setColor(0x36393e)
      .setAuthor(author.tag)
      .setFooter('Support Ticket Created')
      .addField('User', author)
      .addField('ID', author.id)

      await channel.send(newChannel);

      /*const newTicket = new Discord.RichEmbed()
      .setColor(0x36393e)
      .setAuthor(`Hello, ${author.tag}`)
      .setFooter('Support Ticket Created')

      await author.send(newTicket);*/

      author.send(":flag_mf: Merci d'avoir contacté le support ! Un membre du staff va vous contactez dans les plus brefs délais \n:flag_lr: Thank you for contacting the support ! A member of the staff will contact you as soon as possible");
    //  author.send(":flag_lr: Thank you for contacting the support ! A member of the staff will contact you as soon as possible");

      active.channelID = channel.id;
      active.targetID = author.id;

    }


    channel = bot.channels.get(active.channelID);

    /*const dm = new Discord.RichEmbed()
    .setColor(0x36393e)
    .setAuthor(`Thanks you, ${message.author.tag}`)
    .setFooter(`Your message has been sent -- A staff member will be in contact soon`)

    await message.author.send(dm);*/

    message.author.send(":flag_mf: Votre message a été envoyé \n:flag_lr: Your message has been sent");
  //  message.author.send(":flag_lr: Your message has been sent");

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

    let supportUser = bot.users.get(support.targetID);
    if(!supportUser) return message.channel.delete();

    if(message.content.toLowerCase() == '?complete') {

        /*const complete = new Discord.RichEmbed()
        .setColor(0x36393e)
        .setAuthor(`Hey, ${supportUser.tag}`)
        .setFooter('Ticket Closed')
        .setDescription('*Your ticket has been marked as **complete**. If you wish to reopen this.')

        supportUser.send(complete);*/

        message.channel.delete();

        db.delete(`support_${support.targetID}`);
        return;
          }
        }
      });

 bot.login(token);
