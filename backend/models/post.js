const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  userId: { type: String},
  title: { type: String, required: false, maxlength : 500},
  message: { type: String, required: false, maxlength : 500},
  imageUrl: { type: String, required: false},
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  usersLiked: { type: ['String<userID>']},
  usersDisliked: { type:['String<userID>']},
});

module.exports = mongoose.model('Post', postSchema);