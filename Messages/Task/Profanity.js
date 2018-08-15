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

      let infos = JSON.parse(JSON.stringify(response.data.data.user)),
          profanityCurrentLevel = parseInt(infos[0].ProfanityLevel),
          increment = profanityCurrentLevel+1;

      // ProfanityLevel + 1
      axios.put(apiUrl+"/"+user+"/"+increment)
      .then(() => {

        // Récupère le nouveau ProfanityLevel
        axios.get(apiUrl+"/"+user)
        .then(response => {

          let infos = JSON.parse(JSON.stringify(response.data.data.user)),
              profanityCurrentLevel = infos[0].ProfanityLevel;

              ( profanityCurrentLevel%10 === 0 )
              ? msg.channel.send(msg.author+", tu as atteint le niveau "+profanityCurrentLevel+" de toxicitée.")
              : null

        })

      })

    })
  }
}