const { Client } = require("twitter-api-sdk");
require("dotenv").config({ path: __dirname + "/.env" });

// const appKey = process.env.API_KEY;
// const appSecret = process.env.API_SECRET;
// const accessToken = process.env.ACCESS_TOKEN;
// const accessSecret = process.env.ACCESS_SECRET;
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

const client = new Client(clientId, clientSecret);

module.exports = { client };
