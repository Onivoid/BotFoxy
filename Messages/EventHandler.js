const Discord = require('discord.js'),
      client = new Discord.Client(),
      profanity   =  require('./Task/Profanity'),
      help   =  require('./Task/Help'),
      token = process.env.TOKEN;
      
client.login(token)



module.exports = {

  onMessage : (msg) => {
    /* FILTER Profanity */
    let BadWords = require('bad-words');
    const frenchBadWords = require('french-badwords-list');
    let badwords = new BadWords({ placeHolder: 'x', emptyList: true });
    badwords.addWords(frenchBadWords.array);

    msg.content.includes('liste de commandes') && msg.content.startsWith('Foxy')
    ? help.Help(msg)
    : null;

    badwords.isProfane(msg.content)
    ? profanity.Profanity(msg)
    : null;

    msg.content.includes('ProfanityLevel') && msg.content.startsWith('Foxy')
    ? profanity.ProfanityLevelAsk(msg)
    : null;

    msg.content.includes('ProfanityTop') && msg.content.startsWith('Foxy')
    ? profanity.ProfanityTop(msg)
    : null;
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
            .addField(`Tu as actuellement le rôle de \`| Membre Temporaire |\``,
`Pour ne plus l'avoir, je t'invite à faire ta présentation dans le channel \`#présentation\`.
Dans une semaine, si cette présentation n'est pas faite, tu seras automatiquement banni du serveur !
Nous te souhaitons de passer de bons moments parmis nous ! 😄`)
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
            .addField("💀 "+username+" à quitté le discord. 💀","Notre ami "+username+" à quitté notre serveur, quel dommage.")
    );
  }

}