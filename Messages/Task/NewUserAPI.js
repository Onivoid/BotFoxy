const Discord = require('discord.js'),
      client = new Discord.Client(),
      token = process.env.TOKEN;
      
client.login(token)

module.exports = {
  PostUser : member => {
    let axios = require('axios'),
        username = member.user.username,
        apiUrl = process.env.API_URL,
        infos = response.data.data.user[0];

    if(infos === undefined){
      axios.post(apiUrl+"/"+username+"/0")
      .then(console.log(username+" ajouté à l'API"))
    }
  }
}