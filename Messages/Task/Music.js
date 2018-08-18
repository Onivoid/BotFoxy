const Discord = require('discord.js'),
      client = new Discord.Client(),
      yt = require('ytdl-core'),
      token = process.env.TOKEN;

client.login(token);

module.exports = {
  Join : msg =>{
    let voiceChannel = msg.member.voiceChannel;
    voiceChannel.join();
  },
  Leave : msg => {
    let voiceChannel = msg.member.voiceChannel;
    voiceChannel.leave();
  },
  Play : msg => {
    let voiceChannel = msg.member.voiceChannel,
        url          =  msg.content.split(' ')[2],
        streamOptions = { passes : 1, volume: 0.1 }
        dispatcher = msg.guild.voiceConnection;

       
    !msg.guild.voiceConnection
    ? voiceChannel.join().then(dispatcher = msg.guild.voiceConnection) 
      & dispatcher.playStream(yt(url, { audioonly: true }), streamOptions)
    : dispatcher.playStream(yt(url, { audioonly: true }), streamOptions);

    dispatcher.on('error', err => {
      console.log(err);
    })
  }
}