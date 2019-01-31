const ytdl = require('ytdl-core');
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  const streamOptions = {seek : 0, volume : 1};
  let voiceChannelID = "540549319212793866";

  if (voiceChannelID != null) {
    if(message.guild.channels.get(voiceChannelID)) {
      let vc = message.guild.channels.get(voiceChannelID);

      vc.join().then(connection => {
        const stream = ytdl('https://www.youtube.com/watch?v=K-bkr0_LUvQ', {filter : 'audioonly'});
        const dispatcher = connection.playStream(stream, streamOptions);

        dispatcher.on("end", end => {
          vc.leave();
        })
      }).catch(err => {

      });
    }

  }

}

module.exports.help = {
  name: "count"
}
