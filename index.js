const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/edureview");
const User = require("./models/user");

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/contribute", (req, res) => {
  res.render("contribute");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async function (req, res) {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user) {
      const result = req.body.password == user.password;
      if (result) {
        res.redirect("/");
      } else {
        res.send("INCORRECT PASSWORD");
      }
    } else {
      res.send("USER NOT FOUND");
    }
  } catch (e) {
    res.send("ERROR");
  }
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", async function (req, res) {
  try {
    const exists = await User.findOne({ username: req.body.username });
    if (!exists) {
      const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
      });
      res.send("ACCOUNT CREATED");
      res.redirect("home");
    } else {
      res.send("USERNAME ALREADY EXISTS");
    }
  } catch (e) {
    res.send("ERROR");
  }
});

app.get("");

app.listen(8080, () => {
  console.log("PORT 8080");
});
