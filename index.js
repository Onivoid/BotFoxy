/* 
  Author : Skullyfox
  At     : 13 July 2018 12:00
  Mail   : Skullyfox.yt@gmail.com
*/

require('dotenv').config({
  path: 'config/.env'
});

const Discord = require('discord.js'),
      clear = require('clear'),
      client = new Discord.Client(),
      colors = require('colors'),
      newUserApi   =  require('./Messages/Task/NewUserAPI'),
      eventHandler = require('./Messages/EventHandler'),
      token = process.env.TOKEN;

client.on('ready', () => {
  clear();

  console.log(`
  💠 Bot discord développé par 💠

  ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️
     ____  _          _ _        __           
    / ___|| | ___   _| | |_   _ / _| _____  __
    \\___ \\| |/ / | | | | | | | | |_ / _ \\ \\/ /
     ___) |   <| |_| | | | |_| |  _| (_) >  < 
    |____/|_|\\_\\\\__,_|_|_|\\__, |_|  \\___/_/\\_\\
                          |___/            
                             
  ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️

  🎉 Votre bot est actuellement connecté ! 🎉
  `.cyan.bold);

  client.user.setActivity('Foxy liste de commandes')

});

client.on('message', (msg) =>{
  eventHandler.onMessage(msg);
});

client.on('guildMemberAdd', member => {
  eventHandler.newMember(member);
  newUserApi.PostUser(member);
});

client.on('guildMemberRemove', member => {
  eventHandler.leaveMember(member)
});

client.login(token);