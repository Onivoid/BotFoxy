const Discord = require('discord.js'),
      client = new Discord.Client(),
      profanity   =  require('./Task/Profanity'),
      PornPics   =  require('./Task/PornPics'),
      MessageFilter = require('./Task/MessagesFilter'),
      Twitter = require('./Task/APITwitter'),
      clear   =  require('./Task/Clear'),
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

    if (msg.content.includes('Foxy') && msg.content.split(' ').length === 1)
      help.Help(msg);

    if (badwords.isProfane(msg.content)) 
      profanity.Profanity(msg);

    if (msg.content.includes('ProfanityLevel') && msg.content.startsWith('Foxy')) 
      profanity.ProfanityLevelAsk(msg);

    if (msg.content.includes('ProfanityTop') && msg.content.startsWith('Foxy')) 
      profanity.ProfanityTop(msg);

    if (msg.content.includes('ClearMessage') && msg.content.startsWith('Foxy')) 
      clear.ClearMessages(msg);

    if (msg.content.includes('Pornpics') && msg.content.startsWith('Foxy'))
      msg.channel.nsfw 
      ? PornPics.PornPics(msg)
      : msg.channel.send(new Discord.RichEmbed()
                                    .setAuthor(client.user.username,client.user.avatarURL)
                                    .setColor(7385958)
                                    .setThumbnail("https://cdn2.iconfinder.com/data/icons/love-flat-2/128/Sex_Symbol-512.png")
                                    .setTimestamp()
                                    .addField(":x: Indisponnible dans ce Salon :x:","Cette commande est seulement disponnible dans les \
                                    salon NSFW.")
                                        
      );

    if (msg.content.includes('PornCategory') && msg.content.startsWith('Foxy')) 
      PornPics.CategoryShow(msg);

    if (msg.content.includes('VDM') && msg.content.startsWith('Foxy'))
      Twitter.TwitterVDM(msg);

    if(msg.attachments.array().length >= 1)
      MessageFilter.MessageMedia(msg);
  
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