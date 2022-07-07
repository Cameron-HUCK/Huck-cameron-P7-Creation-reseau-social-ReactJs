export const postList = [
	{
		userId: { type: String, required: true },
        message: { type: String, required: true, maxlength : 500},
        imageUrl: { type: String, required: true },
        likes: { type: Number, default: 0 },
        dislikes: { type: Number, default: 0 },
        usersLiked: { type: ['String<userID>'], required: true },
        usersDisliked: { type:['String<userID>'], required: true },
	}
]