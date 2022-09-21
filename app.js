const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

//setting up the app
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//setting up the app
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", (req,res)=>{
  //home screen
  res.render("home");
});

app.get("/resume", (req,res)=>{
  res.render("resume");
});

//app listening on PORT
app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
