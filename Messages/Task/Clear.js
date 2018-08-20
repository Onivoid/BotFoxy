const Discord = require('discord.js'),
      client = new Discord.Client(),
      token = process.env.TOKEN;
      
client.login(token)

module.exports = {
  ClearMessages : msg => {
    let howMuch = msg.content.split(' ')[2];

    msg.channel.bulkDelete(howMuch)
  }
}