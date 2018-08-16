const Discord = require('discord.js'),
      client = new Discord.Client(),
      token = process.env.TOKEN;

client.login(token)

module.exports = {
  Help : (msg) => {
    msg.channel.send(new Discord.RichEmbed()
                    .setAuthor(client.user.username,client.user.avatarURL)
                    .addBlankField()
                    .setTitle('| Commandes disponnibles |')
                    .setColor(7385958)
                    .setThumbnail(client.user.avatarURL)
                    .setTimestamp()
                    .addField(":one: **Foxy ProfanityLevel : **","Permet de connaître ton ProfanityLevel.")
                    .addField(":two: **Foxy ProfanityLevel @Utilisateur : **","Permet de connaître le ProfanityLevel de quelqu'un.")
                    .setFooter("©️Skullyfox#0666",client.users.get('138050601702522880').avatarURL)
    );
  }
}