// CRUD export
const express = require('express');
const Post = require('../models/post');
const User = require('../models/user');
const Moment = require('moment')
const fs = require('fs');

// Allows you to create and add a post
exports.createPost = async (req, res, next)  => {
	try {
		let postData = JSON.parse(req.body.post);
		let newPost = new Post({
			userId: postData.userId,
			title: postData.title,
			message: postData.message,
			imageUrl:`${req.protocol}://${req.get('host')}/images/${req.file.filename}`
		});
		newPost.save()
		.then(() => {
			res.status(201).json({ message:'Post saved!', id: newPost._id });
		})
		.catch(error => res.status(400).json({ error }));
	} catch (err) {
		return res.status(400).send(err);
	}
};

// Allows you to modify the post information
exports.modifyPost = (req, res, next) => {
  const postObject = req.file ?
  {
    ...JSON.parse(req.body.post),
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  }:
  //spread Operator
  {
    ...JSON.parse(req.body.post)
  };
  Post.findOne({ _id: req.params.id })
  .then(async post => {
    if(req.file) {
      const filename = post.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
        Post.updateOne({ _id: req.params.id }, { ...postObject, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Post changed!'}))
        .catch(error => res.status(400).json({error : "Post not find" }));
      })
    }else {
      Post.updateOne({ _id: req.params.id }, { ...postObject, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Post changed!'}))
        .catch(error => res.status(400).json({error : "Post not find" }));
    }
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
exports.getAllPosts = (req, res, next) => {
  Post.find().sort({ createdAt: 'desc'})
  .then(posts => res.status(200).json(posts))
  .catch(error => res.status(400).json({ error }));
}

//Allows you to put a "I like" or "dislike"
exports.likesAndDislikes = (req, res, next) => {
  // Identification of the post
  Post.findOne({_id:req.params.id})
  .then(async post => {
    if(!post){
      res.status(404).json({message: "The post does not exist"});
    }
    else {
    	// Sinon on envoie la valeur userId dans le tableau de like de la post
      let userId = req.body.userId;
      let like = req.body.like;
      let usersLiked = post.usersLiked;
      let usersDisliked = post.usersDisliked;
      switch (like){
        case '1':
          usersDisliked = usersDisliked.filter(element => element !== userId);
        	usersLiked.addToSet(userId);
          break;
        case '-1':
          usersLiked = usersLiked.filter(element => element !== userId);
          usersDisliked.addToSet(userId);
          break;
        case '0':
          // Array.filter allows you to create a new array with all the values that will be equal to true
          usersLiked = usersLiked.filter(element => element !== userId);
          usersDisliked = usersDisliked.filter(element => element !== userId);
          break;
        default:
          res.status(400).send({message: 'Unknown value '});
          return;
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
      res.status(200).send({ message: 'Modification like made', like: like, likes: likes, dislikes: dislikes });
    }
  })
  .catch((error) => {
  	console.log(error);
    res.status(500).json({
      error: error,
    });
  });
}                                                                                                                                                                   