const Discord = require('discord.js'),
      client = new Discord.Client();

module.exports = {
  Help : (msg) => {
    msg.channel.send(new Discord.RichEmbed({
      title : " 🦊 Commandes disponnibles 🦊",
      color : "749999",
      description : `
      
      :one:  ***\`Foxy ProfanityLevel\` : Permet de connaître ton ProfanityLevel.***
      
      :two:  ***\`Foxy ProfanityLevel @Utilisateur\` : Permet de connaître le ProfanityLevel de quelqu'un.***
      
      `,
      
    }).setFooter('©️Skullyfox#2814'));
  }
}