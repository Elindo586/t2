const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.sendFile("home");
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.get("/register", function (req, res) {
  res.render("/views/register.html");
});

app.get("/submit", function (req, res) {
  res.render("submit");
});

app.get("/callback", function (req, res) {
  res.render("callback");
});

app.get("/revoke", function (req, res) {
  res.render("revoke");
});

app.get("/tweets", function (req, res) {
  res.render("tweets");
});

app.listen(3000, function () {
  console.log("server started on port 3000");
});
