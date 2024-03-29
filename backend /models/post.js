const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  userId: { type: String, required: true},
  title: { type: String, required: true},
  message: { type: String, required: true},
  imageUrl: { type: String, required: true},
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  usersLiked: { type: ['String<userID>']},
  usersDisliked: { type:['String<userID>']},
},
{timestamps: true,});

module.exports = mongoose.model('Post', postSchema);``