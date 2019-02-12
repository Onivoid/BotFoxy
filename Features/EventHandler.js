const Discord = require('discord.js'),
      client = new Discord.Client(),
      help   =  require('./Utils/Help'),
      clear = require('./Utils/Clear'),
      survey = require('./Utils/Survey'),
      token = process.env.TOKEN;

client.login(token)



module.exports = {

  onMessage : (msg) => {

    if (msg.content.includes('Foxy') && msg.content.split(' ').length === 1)
      help.Help(msg);

    if (msg.content.includes('ClearMessage') && msg.content.startsWith('Foxy'))
      clear.ClearMessages(msg);

    if (msg.content.includes('Survey') && msg.content.startsWith('Foxy')){
      const MessageSplit = msg.content.split(',');
      survey.Survey(msg, MessageSplit[1], MessageSplit[2], eval(MessageSplit[3])); // Survey(msg, Title, Content);
    }
  },

  newMember: member => {
    const channel = member.guild.channels.find('name', process.env.CHANNEL_WELCOME),
          defaultRole = member.guild.roles.find('name', process.env.DEFAULT_ROLE);

    channel.send(`${member}`,new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setTitle("💠 Bienvenue sur notre serveur ! 💠")
            .setColor(7385958)
            .setThumbnail(member.user.avatarURL)
            .setTimestamp()
            .addField(`Nous te souhaitons de passer de bons moments parmis nous ! 😄`)
    );
    member.addRole(defaultRole).catch(console.error)
  },

  leaveMember: member => {
    const channel = member.guild.channels.find('name', process.env.CHANNEL_WELCOME),
          username = member.user.username;

    channel.send(new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setColor(7385958)
            .setThumbnail(member.user.avatarURL)
            .setTimestamp()
            .addField("Bye Bye :v:",username+" à quitté le discord.")
    );
  }

}
