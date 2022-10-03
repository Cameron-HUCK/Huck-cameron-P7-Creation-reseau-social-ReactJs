import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

const UpdateForm = () => {

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
		const requestOptions = {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({postsUpdate})
		};

		const response = await fetch(`http://localhost:4000/api/post/${postId}`, requestOptions);
        const data = await response.json();
        setpostsUpdate(data.id);
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