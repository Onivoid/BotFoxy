const Discord = require('discord.js'),
      client = new Discord.Client();

module.exports = {
  PostUser : member => {
    let username = member.username,
        axios = require('axios'),
        apiUrl = process.env.API_URL;

    axios.post(apiUrl+"/"+username+"/0")
    .then(console.log(username+" ajouté à l'API"))
  }
}