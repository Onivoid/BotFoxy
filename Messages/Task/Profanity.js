const Discord = require('discord.js'),
      client = new Discord.Client();

module.exports = {

  Profanity : (msg) => {

    let axios = require('axios'),
        apiUrl = process.env.API_URL,
        user = msg.author.username;

    // Récupère le ProfanityLevel actuel
    axios.get(apiUrl+"/"+user)
    .then(response => {

      let infos = response.data.data.user[0],
          profanityCurrentLevel = parseInt(infos.ProfanityLevel),
          increment = profanityCurrentLevel+1;

          if(increment%10 === 0) msg.channel.send(msg.author+", tu as atteint le niveau "+increment+" de toxicitée.")

      // ProfanityLevel + 1
      axios.put(apiUrl+"/"+user+"/"+increment)
      .then() 
      
    })
  },

  ProfanityLevelAsk : msg => {
    let usernameMention = msg.mentions.users.first(),
        author = msg.author.username
        axios = require('axios'),
        apiUrl = process.env.API_URL;

    if (usernameMention != undefined){
      axios.get(apiUrl+"/"+usernameMention.username)
      .then(response => {

        let infos = JSON.parse(JSON.stringify(response.data.data.user)),
            profanityCurrentLevel = infos[0].ProfanityLevel;
        
        msg.channel.send("Le niveau de toxicitée de "+usernameMention.username+" est "+profanityCurrentLevel+" !");

      })
    } else {
      axios.get(apiUrl+"/"+author)
      .then(response => {

        let infos = JSON.parse(JSON.stringify(response.data.data.user)),
            profanityCurrentLevel = infos[0].ProfanityLevel;
        
        msg.channel.send("Ton niveau de toxicitée est "+profanityCurrentLevel+" !");

      })

    }

    
    
  }

}