const { Client } = require("twitter-api-sdk");
require("dotenv").config({ path: __dirname + "/.env" });

// NOT WORKING

async function main() {
  try {
    const client = new Client(process.env.BEARER_TOKEN);
    const searchFilteredStream = await client.tweets.searchStream({
      "tweet.fields": ["hidraulica"],
    });

    console.dir(searchFilteredStream, {
      depth: null,
    });
  } catch (error) {
    console.log(error);
  }
}

main();
