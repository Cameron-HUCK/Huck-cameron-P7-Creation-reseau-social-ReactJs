import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';
import { getUserData } from "../../utils/lib";

const UpdateForm = () => {

	let navigate = useNavigate();
	const [postsUpdate, setpostsUpdate] = useState([]);

	// Localstorage recovery of the token, userId
	let userData = getUserData();
	console.log(userData.token);

	// Retrieve the id from the URL
	const urlParams = useParams();
	const postId = urlParams.id;
	console.log(postId);

	//Retrieve the id of the post
	useEffect(() => {
		fetch(`http://localhost:4000/api/post/${postId}`, {
			headers: {
				'Authorization': `Bearer ${userData.token}`
			},
		})
		.then(function (res) {
		 if (res.ok) {
		   return res.json();
		 }else {
			throw res.statusText;
		}
		})
		.then(function (data) {
			setpostsUpdate(data);
		})
		.catch(function (err) {
			console.log(err);
		})
	},[]);

	// MODIFICATION PUT
	async function handleSubmit(e) {
		e.preventDefault();
		let formData = new FormData();
		formData.append('post', JSON.stringify({
			title: document.getElementById('post-title').value,
			message: document.getElementById('post-content').value
		}));
		formData.append('image', document.getElementById('post-image').files[0]);
		fetch(
			`http://localhost:4000/api/post/${postsUpdate._id}`,
			{
				method: 'PUT',
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
			navigate(`/#post-${postsUpdate._id}`);
		})
		.catch(function(err) {
			alert(err);
			console.log(err);
		});
	}

	return (
		<li className='add-post-item'>
			<div className="user-id-email">Id post = {postId} </div>
			<div className="form-post">
				<form onSubmit={handleSubmit} method="post" action="" className='form-background'>
					<label htmlFor="title" className='color-black' >Post title :</label>
					<input type="text" id="post-title" name="post-title" defaultValue={postsUpdate.title}
						required
						minLength="3"
						maxLength="30"
						>
					</input>
					<label htmlFor="texte" className='color-black'>What's new ?</label>
					<textarea id="post-content" name="content" defaultValue={postsUpdate.message}></textarea>
					<div className="flex-form">
						<label htmlFor="post-image" className="label-file"> Change the picture ? →</label>
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

export default UpdateForm;