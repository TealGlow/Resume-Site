//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";


//setting up the app
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//setting up the blog DB
mongoose.connect("mongodb://localhost:27017/blogDB", {useNewUrlParser: true});

//setting up the post schema
const postSchema={
  title: String,
  content: String
};

//model for the posts
const Post = mongoose.model("Post", postSchema);

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


//pages for the blogging site
app.get("/blog", (req, res)=>{
  //blog screen
  Post.find({}, function(err, posts){
    res.render("blog", {
      startingContent: homeStartingContent,
      posts: posts
    });
  });
});
app.get("/compose", (req,res)=>{
  //compose allowfullscreen
  res.render("compose");
});

app.post("/compose", (req, res)=>{
  //handing the entering of post
  const post = new Post({
    title: req.body.postTitle,
    content: req.body.postBody
  });

  post.save(function(err){
    if(!err){
      res.redirect("/blog");
    }
  });
});

app.get("/posts/:postId", function(req, res){
  const reqPostId = req.params.postId;
  //const requestedTitle = _.lowerCase(req.params.postName);

  Post.findOne({_id: reqPostId}, function(err, post){
    if(!err){
      res.render("post",{title: post.title, content: post.content});
    }
  });
});

//pages for the todo list


//app listening on PORT
app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
