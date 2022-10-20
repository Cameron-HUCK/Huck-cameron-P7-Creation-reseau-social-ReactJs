import React  from "react";
import { useNavigate} from 'react-router-dom';

const PostForm = () => {
	let navigate = useNavigate();
	function handleSubmit(e) {
		e.preventDefault();

		// Récupérer les valeurs des 3 champs à envoyer au serveur : title, content, image
		let postTitle = document.getElementById('post-title').value;
		let postContent = document.getElementById('post-content').value;
		let postImage = document.getElementById('post-image').value;

		console.log(postTitle);
		console.log(postContent);
		console.log(postImage);

		let formData = new FormData();
		formData.append('post', JSON.stringify({
			title: postTitle,
			message: postContent
		}));
		formData.append('image', document.getElementById('post-image').files[0]);
		fetch(
			`http://localhost:4000/api/post`,
			{
				method: 'post',
				body: formData,
				headers: {
          		'Authorization': 'Bearer <token>'
				},
			}
		)
		.then(function(res) {
			if(res.ok) {
				return res.json();
			}
		})
		.then(function(data) {
			navigate(`/#post-${data.id}`);
		})
		.catch(function(err) {
			console.log(err);
			let errorMessage = document.querySelector(".form-post");
			errorMessage.textContent = "Il y a eu un problème la publication de votre post";
		})
	}
	console.log(handleSubmit);
	return (
		<li className='add-post-item'>
			<div className="user-id-email"></div>
			<div className="form-post">
				<form onSubmit={handleSubmit} method="post" action="" className='form-background'>
					<label htmlFor="title" className='color-black' >Post title :</label>
					<input type="text" id="post-title" name="post-title" placeholder='It was amazing...'
						required
						minLength="3"
						maxLength="30"
						>
					</input>
					<label htmlFor="texte" className='color-black'>What's new ?</label>
					<textarea id="post-content" name="content"></textarea>
					<div className="flex-form">
						<label htmlFor="post-image" className="label-file">Add picture →</label>
						<input id="post-image" className="input-file" type="file" name="post-image" />
						<div className="error-message"></div>
						<div className="addBtton">
							<button type='submit' id="addtopost">Publish</button>
						</div>
					</div>
				</form>
			</div>
		</li>
	);
}

export default PostForm;