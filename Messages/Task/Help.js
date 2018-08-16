const Discord = require('discord.js'),
      client = new Discord.Client(),
      token = process.env.TOKEN;

client.login(token)

module.exports = {
  Help : (msg) => {
    msg.channel.send(new Discord.RichEmbed({

      title : "| Commandes disponnibles |",

      author : {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },

      color : 14643262,
      
      thumbnail : {
        url : client.user.avatarURL,
      },

      fields : [
        {
          name: " :one: **Foxy ProfanityLevel : **",
          value: "Permet de connaître ton ProfanityLevel."
        },
        {
          name: " :two: **Foxy ProfanityLevel @Utilisateur : **",
          value: "Permet de connaître le ProfanityLevel de quelqu'un."
        }
      ],

      footer: {
        icon_url: client.users.get('138050601702522880').avatarURL,
        text: "©️Skullyfox#0666",
      },
      
    }));
  }
}