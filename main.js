/**
 * CREATE_INSTANT_INVITE	0x00000001	Allows creation of instant invites	T, V
KICK_MEMBERS *	0x00000002	Allows kicking members
BAN_MEMBERS *	0x00000004	Allows banning members
ADMINISTRATOR *	0x00000008	Allows all permissions and bypasses channel permission overwrites
MANAGE_CHANNELS *	0x00000010	Allows management and editing of channels	T, V
MANAGE_GUILD *	0x00000020	Allows management and editing of the guild
ADD_REACTIONS	0x00000040	Allows for the addition of reactions to messages	T
VIEW_AUDIT_LOG	0x00000080	Allows for viewing of audit logs
VIEW_CHANNEL	0x00000400	Allows guild members to view a channel, which includes reading messages in text channels	T, V
SEND_MESSAGES	0x00000800	Allows for sending messages in a channel	T
SEND_TTS_MESSAGES	0x00001000	Allows for sending of /tts messages	T
MANAGE_MESSAGES *	0x00002000	Allows for deletion of other users messages	T
EMBED_LINKS	0x00004000	Links sent by users with this permission will be auto-embedded	T
ATTACH_FILES	0x00008000	Allows for uploading images and files	T
READ_MESSAGE_HISTORY	0x00010000	Allows for reading of message history	T
MENTION_EVERYONE	0x00020000	Allows for using the @everyone tag to notify all users in a channel, and the @here tag to notify all online users in a channel	T
USE_EXTERNAL_EMOJIS	0x00040000	Allows the usage of custom emojis from other servers	T
CONNECT	0x00100000	Allows for joining of a voice channel	V
SPEAK	0x00200000	Allows for speaking in a voice channel	V
MUTE_MEMBERS	0x00400000	Allows for muting members in a voice channel	V
DEAFEN_MEMBERS	0x00800000	Allows for deafening of members in a voice channel	V
MOVE_MEMBERS	0x01000000	Allows for moving of members between voice channels	V
USE_VAD	0x02000000	Allows for using voice-activity-detection in a voice channel	V
PRIORITY_SPEAKER	0x00000100	Allows for using priority speaker in a voice channel	V
CHANGE_NICKNAME	0x04000000	Allows for modification of own nickname
MANAGE_NICKNAMES	0x08000000	Allows for modification of other users nicknames
MANAGE_ROLES *	0x10000000	Allows management and editing of roles	T, V
MANAGE_WEBHOOKS *	0x20000000	Allows management and editing of webhooks	T, V
MANAGE_EMOJIS *	0x40000000	Allows management and editing of emojis
 */

 const Discord = require("discord.js");
 const fs = require("fs");
 const bot = new Discord.Client({disableEveryone: true});
 bot.commands = new Discord.Collection();
 const token = process.env.token;
 const tools = require('./function.js');
 const db = require('quick.db');
 const ms = require("ms");

 fs.readdir("./commands/", (err, files) => {

   if(err) console.log(err);

   let jsfile = files.filter(f => f.split(".").pop() === "js")
   if(jsfile.length <= 0){
     console.log("Couldn't find commands.");
     return;
   }

   jsfile.forEach((f, i) =>{
     let props = require(`./commands/${f}`);
     console.log(`${f} loaded!`);
     bot.commands.set(props.help.name, props);
   });

 });


 bot.on("ready", async () => {
   console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);

   //bot.user.setActivity("Obéir à mon maître", {type: "WATCHING"});



   //bot.user.setGame("on SourceCade!");
 });

 bot.on("message", async message => {
   if(message.author.bot) return;
   if(message.channel.type === "dm") return;

    let ops = {
    }

   let prefix = "a!";
   let messageArray = message.content.split(" ");
   let cmd = messageArray[0];
   let args = messageArray.slice(1);

   let commandfile = bot.commands.get(cmd.slice(prefix.length));
   if(commandfile) commandfile.run(bot,message,args, ops, tools);

 });


  bot.login(token);
