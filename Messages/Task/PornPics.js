const Discord = require('discord.js'),
      client = new Discord.Client(),
      token = process.env.TOKEN;
      
client.login(token)

module.exports = {
  CategoryShow : msg => {
    let categoryArray = require('../../ressources/CategoryPics').Category;

    console.log(categoryArray)
    let i = 0;
    let arrayToMessage = "";
    categoryArray.forEach(n => {
      arrayToMessage = arrayToMessage +n+"\n"
    });
    msg.channel.send(new Discord.RichEmbed()
                        .setAuthor(client.user.username,client.user.avatarURL)
                        .setColor(16223686)
                        .setThumbnail("https://cdn2.iconfinder.com/data/icons/love-flat-2/128/Sex_Symbol-512.png")
                        .setTimestamp()
                        .addField("Catégories Pornographiques Disponnibles : ",arrayToMessage)
                        .addField("Pour connaitre les autres catégories disponnibles, visitez ce site :","http://pornpics.com/")
  
    );
  }, 

  PornPics : msg => {
    let Crawler = require('../../config/lib/CrawlerPic'),
        category = msg.content.split(' ')[2].toLowerCase();
        
    Crawler.seekPic("http://pornpics.com/"+category)
    .then( data => {
      let howMuchPics = data.length,
          random;

      random = Math.floor(Math.random() * Math.floor(howMuchPics));
      
      if(random < 2){
        while(random<2) random++
      }
      msg.channel.send(data[random])

        
    });
  }
}