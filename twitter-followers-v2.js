const { twitterClient } = require("./twitterClientV2.js");

const tweet1 = async () => {
  try {
    await twitterClient.v2.followers(
      "Happy Thursday to Everybody! How are you doing today? "
    );
  } catch (e) {
    console.log(e);
  }
};

tweet1();
