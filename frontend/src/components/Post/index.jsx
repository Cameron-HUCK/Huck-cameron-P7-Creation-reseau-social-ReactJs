import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Post(props) {
	// Like and dislike
	const [like, setlike] = useState(props.likes);
	const [dislike, setdislike] = useState(props.dislike);

	const [likeActive, setLikeActive] = useState(false);
	const [dislikeActive, setDislikeActive] = useState(false);
	
	// Like
	function likef() {
		if(likeActive){
			setLikeActive(false)
			fetch(`http://localhost:4000/api/post/${props.id}/like`,
					{
						method: 'post'
					}
				)
				.then(function (res) {
					if (res.ok) {
					return res.json();
					}
				})
				.then(function (data) {
					setlike(like-1)
					console.log('1')
				})
				.catch(function (err) {
					console.log(err);
				})
		}else{
			setLikeActive(true)
			fetch(`http://localhost:4000/api/post/${props.id}/like`,
					{
						method: 'POST'
					}
				)
				.then(function (res) {
					if (res.ok) {
					return res.json();
					}
				})
				.then(function (data) {
					setlike(like+1)
					console.log('2')
				})
				.catch(function (err) {
					console.log(err);
				})
			if(dislikeActive){
				setDislikeActive(false)
				fetch(`http://localhost:4000/api/post/${props.id}/like`,
					{
						method: 'POST'
					}
				)
				.then(function (res) {
					if (res.ok) {
					return res.json();
					}
				})
				.then(function (data) {
					setdislike(like+1)
					setdislike(dislike-1)
					console.log('3')
				})
				.catch(function (err) {
					console.log(err);
				})
			}
		}
	}

	// Dislike
	function dislikef(){
		if(dislikeActive){
			setDislikeActive(false)
			fetch(`http://localhost:4000/api/post/${props.id}/like`,
					{
						method: 'POST'
					}
				)
				.then(function (res) {
					if (res.ok) {
					return res.json();
					}
				})
				.then(function (data) {
					setdislike(dislike-1)
					console.log('3')
				})
				.catch(function (err) {
					console.log(err);
				})
		}else{
			setDislikeActive(true)
			fetch(`http://localhost:4000/api/post/${props.id}/like`,
					{
						method: 'POST'
					}
				)
				.then(function (res) {
					if (res.ok) {
					return res.json();
					}
				})
				.then(function (data) {
					setdislike(dislike+1)
				})
				.catch(function (err) {
					console.log(err);
				})
			if(likeActive){
				setLikeActive(false)
				fetch(`http://localhost:4000/api/post/${props.id}/like`,
					{
						method: 'POST'
					}
				)
				.then(function (res) {
					if (res.ok) {
					return res.json();
					}
				})
				.then(function (data) {
					setdislike(dislike+1)
					setlike(like-1)
				})
				.catch(function (err) {
					console.log(err);
				})
			}
		}
	}

	// Redirection vers la page du post
	let navigate = useNavigate();
	
	const routeChange = (data)  => {
		navigate(`/update/${props.id}`);
	}

	//Modification du format de la date
	const date = new Date(props.createdAt);

	// Suppression DELETE
	const deletePost = (data) => {
		if(window.confirm("Êtes-vous sur(e) de vouloir supprimer le post ?")) {
			// DELETE request using fetch inside useEffect React hook
			fetch(
				`http://localhost:4000/api/post/${props.id}`,
				{
					method: 'DELETE'
				}
			)
			.then(function(res) {
				if(res.ok) {
					return res.json();
				}
			})
			.then(function(data) {
				document.getElementById(`post-${props.id}`).remove();
			})
			.catch(function(err) {
				alert(err);
				console.log(err);
			});
		}
	}

	return (
		<li id={'post-'+props.id} className="posts-item shadow-gray" data-id={props.id}>
			<div className="flex-up">
				<h2 className="post-title ">{props.title}</h2>
			</div>	
			<div className="post-message shadow-gray">{props.message}</div>
			<img className="post-image shadow-gray" src={props.imageUrl} width="300" aria-hidden alt={props.title}/>
			<div className="flex-detail">	
				<div className="post-author"> {props.userId}</div>
				<div className='post-date' format="DD-MM-YY">{date.toLocaleString()}</div>
			</div>
			<div className="post-details shadow-gray">
				<button onClick={likef} className={[likeActive ? "post-likes":null, 'button'].join(' ')}>♥ Like</button>
				<button onClick={dislikef} className={[dislikeActive ? "post-dislikes":null, 'button'].join(' ')}>♥ Dislike</button>
				<button onClick={routeChange} className="post-update">Update</button>
				<button onClick={deletePost} className="post-delete">Delete</button>
			</div>
		</li>
	)
}

export default Post;

