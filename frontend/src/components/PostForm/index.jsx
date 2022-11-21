import React  from "react";
import { useNavigate} from 'react-router-dom';
import { getUserData } from "../../utils/lib";

const PostForm = () => {

	// Navigate function
	let navigate = useNavigate();

	// Localstorage recovery of the token, userId
	let userData = getUserData();
	console.log(userData);

	// Send to Post
	function handleSubmit(e) {
		e.preventDefault();

		// Retrieve the values ​​of the fields to send to the server: title, content, image
		let postTitle = document.getElementById('post-title').value;
		let postContent = document.getElementById('post-content').value;


		let formData = new FormData();
		formData.append('post', JSON.stringify({
			userId: userData.userId,
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
          		'Authorization': `Bearer ${userData.token}`
				},
			}
		)
		.then(function(res) {
			if(res.ok) {
				return res.json();
			}else {
				throw res.statusText;
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

	return (
		<li className='add-post-item'>
			<div className="user-id-email">{userData.userId}</div>
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