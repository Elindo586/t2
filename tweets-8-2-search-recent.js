const ejs = require("ejs");
const fs = require("fs");
const express = require("express");
const app = express();
app.set("view engine", "ejs");

const { Client } = require("twitter-api-sdk");
require("dotenv").config({ path: __dirname + "/.env" });

// This is working!

app.get("/", function (req, res) {
  res.render("home");
});

async function getSome() {
  const client = new Client(process.env.BEARER_TOKEN);
  const recentSearch = await client.tweets.tweetsRecentSearch({
    //One query/rule/filter for matching Tweets. Refer to https://t.co/rulelength to identify the max query length
    query: "#hidraulica",
    max_results: 100,
  });

  const theJson = JSON.stringify(recentSearch);
  fs.writeFile("./search-recent.json", theJson, (err) => {
    if (err) {
      console.error(err);
    }
  });
}

getSome();

app.listen(3000, () => {
  console.log(`Go here to login: http://127.0.0.1:3000/login`);
});
