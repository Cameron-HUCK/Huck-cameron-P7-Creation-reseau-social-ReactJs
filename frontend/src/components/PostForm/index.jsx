import React from "react";

const PostForm = () => {

	function handleSubmit(e) {
		e.preventDefault();

		// Récupérer les valeurs des 3 champs à envoyer au serveur : title, content, image
		let postTitle = document.getElementById('post-title').value;
		let postContent = document.getElementById('post-content').value;
		let postImage = document.getElementById('post-image').value;

		console.log(postTitle);
		console.log(postContent);
		console.log(postImage);

		// Vérifier que les champs sont bien saisis
		// -- Checker Regex, non vide, etc

		// Envoyer les données au backend
		// -- Fetch ?

		const formData = new FormData();
		formData.append('post', {
			title: postTitle,
			message: postContent
		});
		console.log(postContent);
		formData.append('image', document.getElementById('post-image').files[0]);
		fetch(
			`http://localhost:4000/api/post`,
			{
				method: 'post',
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
	console.log(handleSubmit);
	return (
		<li className='add-post-item'>
			<div className="user-id-email">email User Id </div>
			<div className="form-post">
				<form onSubmit={handleSubmit} method="post" action="">
					<label htmlFor="title">Titre du post</label>
					<input type="text" id="post-title" name="post-title" 
						required
						minLength="3"
						maxLength="30"
						size="40">
					</input>
					<br />
					<label htmlFor="texte">Quoi de neuf ?</label>
					<div className="flex-from">
						<input type="text" id="post-content" name="post-content" 
							required
							minLength="0"
							maxLength="250"
							size="200">
						</input>
						<label htmlFor="post-image" className="label-file">Choisir une image</label>
						<input id="post-image" className="input-file" type="file" name="post-image" />
						<div className="error-message"></div>
						<br />
						<div className="addBtton">
							<button type='submit' id="addToPost">Publication</button>
						</div>
					</div>
				</form>
			</div>
		</li>
	);
}

export default PostForm;