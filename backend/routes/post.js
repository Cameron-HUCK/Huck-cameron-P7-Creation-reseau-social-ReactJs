const express = require('express');

const router = express.Router();

// Controllers
const postCtrl = require('../controllers/post');

//Authentification
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

// CRUD
// Send and Save posts to the database
router.post('/',auth, multer, postCtrl.createPost);
// To modify or update the product
router.put('/:id', auth, multer, postCtrl.modifyPost);
// Delete a post
router.delete('/:id', auth, postCtrl.deletePost);
// Retrieve a specific POST
router.get('/:id', auth, postCtrl.getOnePost);
// Return all posts in the database
router.get('/', auth, postCtrl.getAllPosts);
//Send likes and dislikes
router.post('/:id/like', auth, postCtrl.likesAndDislikes);

module.exports = router;