require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.port || 3000;
const bodyparser = require("body-parser");
const colors = require("colors");

// # router
const router = require("./routes/index");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(router);
app.listen(port, () => {
  console.log("run port:".red, port);
});
