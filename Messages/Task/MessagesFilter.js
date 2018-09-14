const Discord = require('discord.js'),
      client = new Discord.Client(),
      token = process.env.TOKEN;

client.login(token)

module.exports = {
  MessageMedia: msg => {
    msg.delete();
    msg.channel.send(msg.author+", les medias sont seulement accepté dans les channels prévus à cet effet. ")
      .then(msg => {
        setTimeout(() => {
        msg.delete();
      },10000)
    })
  }
}