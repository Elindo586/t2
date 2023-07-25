const { Client } = require("twitter-api-sdk");
require("dotenv").config({ path: __dirname + "/.env" });

// This is working!

async function main() {
  try {
    const client = new Client(process.env.BEARER_TOKEN);
    const lookupTweetById = await client.tweets.findTweetById(
      //The ID of the Tweet
      "1460323737035677698"
    );
    console.dir(lookupTweetById, {
      depth: null,
    });
  } catch (error) {
    console.log(error);
  }
}

main();
