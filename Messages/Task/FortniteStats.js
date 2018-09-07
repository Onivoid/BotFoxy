const Discord = require('discord.js'),
      client = new Discord.Client(),
      token = process.env.TOKEN,
      axios = require('axios'),
      APIFortniteToken = process.env.API_FORTNITE_TOKEN,
      APIFortniteTokenName = process.env.API_FORTNITE_TOKEN_NAME;
      
client.login(token);
axios.defaults.headers.common[APIFortniteTokenName] = APIFortniteToken
module.exports = {

  /* GET Fortnite BR Player Stats */
  GetStats : (msg, plateform, username) => {
    let url = `https://api.fortnitetracker.com/v1/profile/${plateform}/${username}`;

    axios.get(url)
      .then(res => {
        let Win = res.data.lifeTimeStats[8].value,
            Matches = res.data.lifeTimeStats[7].value,
            Top5 = res.data.lifeTimeStats[0].value,
            Top10 = res.data.lifeTimeStats[3].value,
            Top25 = res.data.lifeTimeStats[5].value,
            Kills = res.data.lifeTimeStats[10].value;

        msg.channel.send(new Discord.RichEmbed()
                    .setAuthor(client.user.username,client.user.avatarURL)
                    .setColor(4880610)
                    .setTitle(` 💠 --- Stats du Joueur ${username} --- 💠 `)
                    .setThumbnail("https://i.pinimg.com/originals/3f/43/b8/3f43b80b8dff5adbdf748594c62aae08.png")
                    .setTimestamp()
                    .addField("\u200B","======== Stats Générales ========")
                    .addField("Nombre de Parties",Matches, true)
                    .addField("Nombre de Kills",Kills, true)
                    .addField("\u200B","======== Stats Tops =============")
                    .addField("Nombre de Tops 1",Win, true)
                    .addField("Nombre de Tops 5",Top5, true)
                    .addField("Nombre de Tops 10",Top10, true)
                    .addField("Nombre de Tops 25",Top25, true)
        )
        console.log(res.data.lifeTimeStats);
      }).catch(err => {console.log(err)});

  },

  GetStore : msg => {
    let url = "https://api.fortnitetracker.com/v1/store";

    axios.get(url)
      .then( res => {
        let i = 0;
        res.data.forEach( item => {
          i++;
          msg.channel.send(new Discord.RichEmbed()
                    .setAuthor(client.user.username,client.user.avatarURL)
                    .setColor(4880610)
                    .setTitle(` 💠 --- Item n°${i} de la boutique du Jour --- 💠 `)
                    .setThumbnail(item.imageUrl)
                    .setTimestamp()
                    .addField("\u200B","======== Informations de l'Item ========")
                    .addField("Nom de l'Item : ",item.name, true)
                    .addField("Prix de l'Item : ",item.vBucks+" vBucks", true)
          )
        });
      }).catch( err => {console.log(err)} );

  }

};