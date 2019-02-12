const Discord = require('discord.js'),
      client = new Discord.Client(),
      token = process.env.TOKEN;

client.login(token)

module.exports = {
  Help : (msg) => {
    msg.channel.send(new Discord.RichEmbed()
                    .setAuthor(client.user.username,client.user.avatarURL)
                    .setTitle('| Commandes disponnibles |')
                    .setColor(7385958)
                    .setThumbnail(client.user.avatarURL)
                    .setTimestamp()
                    .addField(":one:","Aucunes features pour le moment.")
                    .setFooter("©️Skullyfox#0666",client.users.get('138050601702522880').avatarURL)
    );
  }
}