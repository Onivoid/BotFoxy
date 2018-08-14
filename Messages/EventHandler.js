const Discord = require('discord.js'),
      client = new Discord.Client(),
      help   =  require('./Task/Help');

module.exports = {

  onMessage : (msg) => {
    (msg.content.includes('liste de commandes') && msg.content.startsWith('Foxy'))
    ? help.Help(msg)
    : null
  },

  newMember: member => {
    const channel = member.guild.channels.find('name', process.env.CHANNEL_WELCOME);
    const defaultRole = member.guild.roles.find('name', process.env.DEFAULT_ROLE);
    channel.send(`${member}`,new Discord.RichEmbed({
      title : "💠 Bienvenue sur notre serveur ! 💠",
      color : "749999",
      description : `Tu as actuellement le rôle de \`| Membre Temporaire |\`.

      Pour ne plus l'avoir, je t'invite à faire ta présentation dans le channel \`#présentation\`.
      Dans une semaine, si cette présentation n'est pas faite, tu seras automatiquement banni du serveur !
      
      Nous te souhaitons de passer de bons moments parmis nous ! 😄`,
      
    }).setFooter('©️Skullyfox#2814'));
    member.addRole(defaultRole).catch(console.error)
  },

  leaveMember: member => {
    const channel = member.guild.channels.find('name', process.env.CHANNEL_WELCOME),
          username = member.username;
    channel.send(new Discord.RichEmbed({
      title : "💀 "+username+"  à quitté le discord. 💀",
      color : "749999",
      description : `Notre ami `+username+` à quitté notre serveur,
      quel dommage.`,
      
    }).setFooter('©️Skullyfox#2814'));
  }

}