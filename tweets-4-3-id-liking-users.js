// const { Client } = require("twitter-api-sdk");
const { Client } = require("twitter-api-sdk");
require("dotenv").config({ path: __dirname + "/.env" });

// This is working!

async function main() {
  try {
    const client = new Client(process.env.BEARER_TOKEN);
    const likingUsers = await client.users.tweetsIdLikingUsers(
      //The ID of the Tweet
      "1354143047324299264"
    );
    console.dir(likingUsers, {
      depth: null,
    });
  } catch (error) {
    console.log(error);
  }
}

main();
