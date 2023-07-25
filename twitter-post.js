const { client } = require("./twitterClient1.js");

const tweet = async () => {
  try {
    await client.tweets.createTweet({
      text: "Are you having fun today?",
      poll: {
        options: ["yes", "Maybe", "No"],
        duration_minutes: 120,
      },
    }),
      console.dir(tweet, {
        depth: null,
      });
  } catch (e) {
    console.log(e);
  }
};

tweet();
