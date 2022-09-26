import React, { useState } from "react";

const UpdateForm = (props) => {
	const [postsUpdate, setpostsUpdate] = useState([]);
	async function handleSubmit(e) {
		e.preventDefault();
		const requestOptions = {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ title: 'React PUT Request Example' })
		};
		const response = await fetch('http://localhost:4000/api/post/', requestOptions);
        const data = await response.json();
        setpostsUpdate(data.id);
	}
	console.log(postsUpdate)
	
	
	return (
		<li className='add-post-item'>
			<div className="user-id-email">{props.id} = </div>
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