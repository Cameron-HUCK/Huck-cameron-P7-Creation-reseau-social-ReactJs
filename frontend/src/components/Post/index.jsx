import React, { useState } from "react";
import PostForm from "../PostForm";
function Post({ title, message, imageUrl, userId }) {
	return (
		<li className="posts-item">
			<h2 className="post-title">{title}</h2>
			<div className="post-message">{message}</div>
			<img className="post-image shadow-gray" src={imageUrl} width="300" aria-hidden alt="image post"/>
			<div className="post-details back-color-white shadow-gray">
				<div className="post-author back-color-white">User= {userId}</div>
				<div className="post-date back-color-white">12-12-2020</div>
				<button onClick={PostForm} className="post-update">Update</button>
				<button className="post-likes shadow-gray">♥ Dislike</button>
				<button className="post-dislikes shadow-gray">♥ Like</button>
			</div>
		</li>
	)
}

export default Post;
