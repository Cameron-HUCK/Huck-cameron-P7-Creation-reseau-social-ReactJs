import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';

const UpdateForm = () => {

	let navigate = useNavigate();
	const [postsUpdate, setpostsUpdate] = useState([]);

	//Recuperation de l'id
	const urlParams = useParams();
	const postId = urlParams.id;
	console.log(postId);

	//Recuperation de l'id
	useEffect(() => {
		fetch(`http://localhost:4000/api/post/${postId}`)
		.then(function (res) {
		 if (res.ok) {
		   return res.json();
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
				body: formData
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