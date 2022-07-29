import React from "react";

function Post({ title, message, imageUrl, userId }) {
	function handleUpdate(e) {
		e.preventDefault();
		function getParamUrl(param = '') {
			if(param === '') {
				return '';
			}
			else {
				let url = document.location.href;
				let urlObject = new URL(url);
				let value = urlObject.searchParams.get(param);
				if(value == null) {
					return '';
				}
				else {
					return value;
				}
			}
		}
		let postId = getParamUrl('id');
		// Récupérer les valeurs des 3 champs à envoyer au serveur : title, content, image
		let postTitle = document.getElementById('post-title');
		let postContent = document.getElementById('post-content');
		let postImage = document.getElementById('post-image');

		console.log(postTitle);
		console.log(postContent);
		console.log(postImage);




		let formData = new FormData();
		formData.append('post', JSON.stringify({
			title: postTitle,
			message: postContent
		}));
		
		fetch(
			`http://localhost:3000/api/post/${postId}`,
			{
				method: 'put',
				body: formData
			}
		)
		.then(function(res) {
			if(res.ok) {
				return res.json();
			}
		})
		.then(function(data) {
			console.log(data);
		})
		.catch(function(err) {
			console.log(err);
		})
	}
	return (
		<li className="posts-item">
			<h2 className="post-title">{title}</h2>
			<div className="post-message">{message}</div>
			<img className="post-image shadow-gray" src={imageUrl} width="300" aria-hidden alt="image post"/>
			<div className="post-details back-color-white shadow-gray">
				<div className="post-author back-color-white">User= {userId}</div>
				<div className="post-date back-color-white">12-12-2020</div>
				<button onClick={handleUpdate} className="post-update">Update</button>
				<button className="post-likes shadow-gray">♥ Dislike</button>
				<button className="post-dislikes shadow-gray">♥ Like</button>
			</div>
		</li>
	)
}

export default Post;
