import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Post(props) {

	// recuperation localstorage dun token, userId
	function getUserToken() {
	let dataToken = localStorage.getItem('dataUser');
	if(dataToken == null) {
			return {};
		}
		try {
			let dataLocalStorage = JSON.parse(dataToken);
			return dataLocalStorage;
		}
		catch(e) {
			console.log(e);
			return {};
		}
	};
	let userToken = getUserToken('token');
	console.log(userToken.token);

	// Like and dislike
	const [like, setLike] = useState(props.likes);
	const [dislike, setDislike] = useState(props.dislikes);

	const [likeActive, setLikeActive] = useState(false);
	const [dislikeActive, setDislikeActive] = useState(false);
	
	function doLike() {
		if(likeActive) {
			updateLikes('0');
		}
		else {
			updateLikes('1');
		}
	}

	function doDislike() {
		if(dislikeActive) {
			updateLikes('0');
		}
		else {
			updateLikes('-1');
		}
	}

	function updateLikes(value) {
		// Preparing data
		let data = {
			userId: userToken.userId,
			like: value
		};
		// Sending data
		fetch(`http://localhost:4000/api/post/${props.id}/like`,
			{
				method: 'post',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${userToken.token}`
				},
				body: JSON.stringify(data)
			}
		)
		.then(function(res) {
			if(res.ok) {
				return res.json();
			}
		})
		.then(function(data) {
			console.log('data', data);
			setLike(data.likes);
			setDislike(data.dislikes);
			if(data.like === '0') {
				setLikeActive(false);
				setDislikeActive(false);
			}
			else if(data.like === '1') {
				setLikeActive(true);
				setDislikeActive(false);
			}
			else if(data.like === '-1') {
				setLikeActive(false);
				setDislikeActive(true);
			}
		})
		.catch(function(err) {
			console.log(err);
		});
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
					method: 'DELETE',
					headers: {
						'Authorization': `Bearer ${userToken.token}`
					  },
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
				<button onClick={doLike} className={[likeActive ? "post-likes":null, 'button'].join(' ')}>♥ Like ({like})</button>
				<button onClick={doDislike} className={[dislikeActive ? "post-dislikes":null, 'button'].join(' ')}>♥ Dislike ({dislike})</button>
				<button onClick={routeChange} className="post-update">Update</button>
				<button onClick={deletePost} className="post-delete">Delete</button>
			</div>
		</li>
	)
}

export default Post;
