const Discord = require('discord.js'),
      client = new Discord.Client(),
      token = process.env.TOKEN;

client.login(token)

module.exports = {
    Survey : (msg, title, content, color) => {
    if (color == undefined)
        return color = 7385958;
    msg.channel.send(new Discord.RichEmbed()
                    .setAuthor(client.user.username,client.user.avatarURL)
                    .setTitle('| Sondage de '+ msg.author.username +' |')
                    .setColor(color)
                    .setThumbnail(client.user.avatarURL)
                    .setTimestamp()
                    .addBlankField()
                    .addField(title,content)
                    .addBlankField()
                    .addField("\u200B","Réagissez au sondage avec les reactions ':white_check_mark:' ou ':x:'")
                    .setFooter("©️Skullyfox#0666",client.users.get('138050601702522880').avatarURL)
    );
    msg.delete();
  }
}