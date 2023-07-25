const { TwitterApi } = require("twitter-api-v2");
require("dotenv").config({ path: __dirname + "/.env" });

const tweet1 = async () => {
  try {
    const client = new TwitterApi({
      appKey: process.env.API_KEY,
      appSecret: process.env.API_SECRET,
      accessToken: process.env.ACCESS_TOKEN,
      accessSecret: process.env.ACCESS_SECRET,
      bearer: process.env.BEARER_TOKEN,
    });
    await client.v2.tweet("What is going on today? Are you all having fun? ");
  } catch (e) {
    console.log(e);
  }
};

tweet1();
