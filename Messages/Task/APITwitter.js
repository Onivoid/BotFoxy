const Discord = require('discord.js'),
      client = new Discord.Client(),
      token = process.env.TOKEN,
      axios = require('axios'),
      TwitterConsumerKey = process.env.TWITTER_CONSUMER_KEY,
      TwitterTokenKey = process.env.TWITTER_TOKEN_KEY,
      TwitterApiURL = process.env.API_TWITTER_TIMELINE_URL,
      TwitterApiEmbedURL = process.env.API_TWITTER_OEMBED_URL;
      
client.login(token);
axios.defaults.headers.common["Authorization"] = `OAuth \
oauth_consumer_key="${TwitterConsumerKey}",\
oauth_token="${TwitterTokenKey}",\
oauth_signature_method="HMAC-SHA1",\
oauth_timestamp="1536839405",\
oauth_nonce="LZETqksx7Lz",\
oauth_version="1.0",\
oauth_signature="g6LdaVvuVNltcZGFbg3G0EFzuPs%3D`

module.exports = {
  TwitterVDM: msg => {

    let UrlToEmbed = "https://twitter.com/Interior/status/";

    axios.get(TwitterApiURL+"screen_name=gigacastra&exclude_replies=true")
      .then( res => {
        let test = 0,
        IdTweet = res.data.statuses[test].id_str;
        console.log(IdTweet);

      }).catch( err => console.log(err));
  }
}