const cheerio = require('cheerio'),
      url   = require('url'),
      axios = require('axios');

module.exports = {

  seekPic : site => {

    let results = [];
    
    return axios.get(site)
    .then(response => {
      
      let $ = cheerio.load(response.data);
  
      $("img").each(function(i, image) {
  
          results.push(url.resolve(site, $(image).attr('src')));
      });
  
      return results;
  
    })
    .catch(err =>{
      console.log("ERROR : "+err)
    });

  }

}


