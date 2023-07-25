//Import package

const { Client, auth } = require("twitter-api-sdk");
require("dotenv").config({ path: __dirname + "/.env" });

const ejs = require("ejs");
const express = require("express");
const app = express();
app.set("view engine", "ejs");

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

const STATE = "my-state";

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/login", async function (req, res) {
  const authUrl = authClient.generateAuthURL({
    state: STATE,
    code_challenge_method: "s256",
  });
  res.redirect(authUrl);
});

app.get("/callback", async function (req, res) {
  try {
    const { code, state } = req.query;
    if (state !== STATE) return res.status(500).send("State isn't matching");
    await authClient.requestAccessToken(code);
    res.redirect("/tweets");
  } catch (error) {
    console.log(error);
  }
});

app.get("/tweets", async function (req, res) {
  try {
    const tweets = await client.tweets.createTweet({
      // The text of the Tweet
      text: "Digame que pasa?  #GranHermanoChile ",

      // Options for a Tweet with a poll
      // poll: {
      //   options: ["Yes", "Maybe", "No"],
      //   duration_minutes: 120,
      // },
    });
    res.send(tweets);
  } catch (error) {
    console.log("tweets error", error);
  }
});

app.get("/revoke", async function (req, res) {
  try {
    const response = await authClient.revokeAccessToken();
    res.send(response);
  } catch (error) {
    console.log(error);
  }
});

app.listen(3000, () => {
  console.log(`Go here to login: http://127.0.0.1:3000/login`);
});
