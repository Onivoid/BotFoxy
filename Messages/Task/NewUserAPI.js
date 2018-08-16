const Discord = require('discord.js'),
      client = new Discord.Client();

module.exports = {
  PostUser : member => {
    let axios = require('axios'),
        username = member.user.username,
        apiUrl = process.env.API_URL;

    axios.get(apiUrl+"/"+username)
    .then(response => {

      let infos = JSON.parse(JSON.stringify(response.data.data.user[0])),
      
      if(infos === undefined){
        axios.post(apiUrl+"/"+username+"/0")
        .then(console.log(username+" ajouté à l'API"))
      }

    })
  }
}