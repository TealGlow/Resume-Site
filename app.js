//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");


const app = express();

//setting up the app
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", (req,res)=>{
  res.render("home");
});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
