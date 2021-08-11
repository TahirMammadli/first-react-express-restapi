const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Post = require("./Post");
const fetch = require("node-fetch");
const MONGODB_URI = require('./config')

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

const getPosts = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((json) => {
      json.map((item) => {
        const post = new Post({
          userId: item.userId,
          title: item.title,
          body: item.body,
        });
        post
          .save()
          .then((res) => console.log("saved to db"))
          .catch((err) => console.log(err));
      });
    });
};

app.get("/posts", (req, res, next) => {
  Post.find()
    .then((posts) => {
      res.json({ posts: posts });
    })
    .catch((err) => console.log(err));
});

app.post("/posts", (req,res,next) => {
    const title = req.body.title
    const content = req.body.content 

    const post = new Post({
        title: title,
        content: content
    })
    post.save().then(res.json({message: 'saved to db'})).catch(err => console.log(err))
})


mongoose
  .connect(
    MONGODB_URI,
    {}
  )
  .then((res) => {
    console.log("connected!");
    app.listen(8080);
  })
  .catch((err) => console.log(err));
