// Copyright 2021 Twitter, Inc.
// SPDX-License-Identifier: Apache-2.0

const { Client } = require("twitter-api-sdk");
require("dotenv").config({ path: __dirname + "/.env" });

const twitterBearer = new Client(process.env.BEARER_TOKEN);

module.exports = { twitterBearer };
