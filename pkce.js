const { Client, auth } = require("twitter-api-sdk");
require("dotenv").config({ path: __dirname + "/.env" });

const authClient = new auth.OAuth2User({
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
  callback: "http://127.0.0.1:3000/callback",
  scopes: [
    "tweet.read",
    "users.read",
    "offline.access",
    "tweet.write",
    "tweet.moderate.write",
    "follows.read",
    "follows.write",
    "space.read",
    "mute.read",
    "mute.write",
    "like.read",
    "like.write",
    "list.read",
    "list.write",
    "block.read",
    "block.write",
    "bookmark.read",
    "bookmark.write",
  ],
});

const client = new Client(authClient);

module.exports = { client };
