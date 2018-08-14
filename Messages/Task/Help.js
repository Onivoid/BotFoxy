const Discord = require('discord.js'),
      client = new Discord.Client();

module.exports = {
  Help : (msg) => {
    msg.channel.send(new Discord.RichEmbed({
      title : " 🦊 Commandes disponnibles 🦊",
      color : "749999",
      description : `\`Pas de commandes disponibles pour le moment.\``,
      
    }).setFooter('©️Skullyfox#2814'));
  }
}