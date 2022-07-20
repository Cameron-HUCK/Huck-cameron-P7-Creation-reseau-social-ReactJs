// CRUD export
const express = require('express');
const Post = require('../models/post');
const User = require('../models/user');
const fs = require('fs');

// Allows you to create and add a post
exports.createPost =  (req, res, next) => {

console.log(req.body);
console.log(req.file.filename);

  //const postObject = JSON.parse(req.body.post);
  const postObject = req.body.post;
  delete postObject._id;
  const newPost = new Post({
    ...postObject,
    imageUrl:`${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  });
  newPost.save()
  .then(() => res.status(201).json({ message:'Post saved!'}))
  .catch(error => res.status(400).json({ error }));
}

// Allows you to modify the post information
exports.modifyPost = (req, res, next) => {
  const postObject = req.file ?
  {
    ...JSON.parse(req.body.post),
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  }:
  //spread Operator
  {
    ...req.body 
  };
  Post.findOne({ _id: req.params.id })
  .then(async post => {
    const filename = post.imageUrl.split('/images/')[1];
    fs.unlink(`images/${filename}`, () => {
      Post.updateOne({ _id: req.params.id }, { ...postObject, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Post changed!'}))
      .catch(error => res.status(400).json({error : "Post not find" }));
    })
  }
)}

// Remove the selected post
exports.deletePost = (req, res, next) => {
  Post.findOne({ _id: req.params.id })
  .then(post => {
    const filename = post.imageUrl.split('/images/')[1];
    fs.unlink(`images/${filename}`, () => {
      Post.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Post removed!'}))
      .catch(error => res.status(400).json({error : "Post not find"}));
    });
  })
  .catch(error => res.status(500).json({ error }));
};

// Select a single post
exports.getOnePost = (req, res, next) => {
  Post.findOne({ _id: req.params.id })
  .then(async post => {
    if(!post){
      res.status(404).json({message: "The post does not exist"});
    }else{
      res.status(200).json(await post);
    }
  })
  .catch(error => res.status(500).json({error : "Post not find" }));
}

// Select all posts
exports.getAllPost = (req, res, next) => {
  Post.find()
  .then(post => res.status(200).json(post))
  .catch(error => res.status(400).json({ error }));
}

//Allows you to put a "I like" or "dislike"
exports.likeAndDislikes = (req, res, next) => {
  // Identification of the post
  Post.findOne({_id:req.params.id})
  .then(async post => {
    if(!post){
      res.status(404).json({message: "The post does not exist"});
    // Sinon on envoie la valeur userId  dans le tableau de like de la post
    }else{
      let userId = req.body.userId;
      let like = req.body.like;
      let usersLiked = post.usersLiked;
      let usersDisliked = post.usersDisliked

      switch (like){
        case 1:
        usersLiked.addToSet(userId);
          break;
        case 0:
          // Array.filter allows you to create a new array with all the values ​​that will be equal to true
          usersLiked = usersLiked.filter(element => element !== userId);
          usersDisliked = usersDisliked.filter(element => element !== userId);
          break;
        case -1:
          usersDisliked.addToSet(userId);
          break;
        default:
          res.status(402).send({message: 'Unknown value '})  
          break;
      }
      // The function waiting for a response with the word await 
      let likes = usersLiked.length;
      let dislikes = usersDisliked.length;
      await post.updateOne({
        usersLiked: usersLiked,
        usersDisliked: usersDisliked,
        likes: likes,
        dislikes: dislikes
      });
      res.status(200).send({message: 'Modification like made'})
    }
  })
  .catch(error => res.status(500).json({ error }));
}