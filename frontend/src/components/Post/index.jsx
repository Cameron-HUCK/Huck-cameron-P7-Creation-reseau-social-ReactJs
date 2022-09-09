import React from "react";
function Post({ title, message, imageUrl, userId }) {
	return (
		<li className="posts-item shadow-gray">
			<div className="flex-up">
			<div className="post-author">{userId}</div>
				<h2 className="post-title ">{title}</h2>
			</div>	
			<div className="post-message shadow-gray">{message}</div>
			<img className="post-image shadow-gray" src={imageUrl} width="300" aria-hidden alt="image post"/>
			<div className="post-details shadow-gray">
				<div className="post-date ">12-12-2020</div>
				<button className="post-delete">Delete</button>
				<button className="post-update">Update</button>
				<button className="post-likes">♥ Like</button>
				<button className="post-dislikes">♥ Dislike</button>
			</div>
		</li>
	)
}

export default Post;
