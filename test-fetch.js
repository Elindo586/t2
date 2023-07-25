const ejs = require("ejs");
const fs = require("fs");
const express = require("express");
const app = express();
app.set("view engine", "ejs");

const data1 = require("./search-recent.json");

const theData1 = data1.data[1].id;
console.log(theData1);

async function theLike() {
  try {
    await fetch("/test-like", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ message: theData1 }),
    });
  } catch (e) {
    console.log(e);
  }
}
theLike();

app.listen(3000, () => {
  console.log(`Go here to login: http://127.0.0.1:3000/login`);
});
