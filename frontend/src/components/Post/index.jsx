import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {getUserData} from '../../utils/lib'

function Post(props) {

	// Localstorage recovery of the token, userId
	let userData = getUserData();
	
	// Retrieve the email of the user Id
	let [emailUser, setEmailUser] = useState('');
	useEffect(() => {
		fetch(`http://localhost:4000/api/auth/${props.userId}`,
			{
				headers: {
				'Authorization': `Bearer ${userData.token}`
				},
			}
		)
		.then(function (res) {
			if (res.ok) {
			  return res.json();
			}
			else {
				throw res.statusText;
			}
		})
		.then(function (data) {
			setEmailUser(data.email);
  	})
		.catch(function (err) {
			console.log(err);
		})
	}, [])

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
			userId: userData.userId,
			like: value
		};

		// Sending data
		fetch(`http://localhost:4000/api/post/${props.id}/like`,
			{
				method: 'post',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${userData.token}`
				},
				body: JSON.stringify(data)
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
	
	// Redirect to the post page
	let navigate = useNavigate();
	
	const routeChange = (data)  => {
		navigate(`/update/${props.id}`);
	}

	// Modification of the date format
	const date = new Date(props.createdAt);

	// Deletion DELETE
	const deletePost = (data) => {
		if(window.confirm("Êtes-vous sur(e) de vouloir supprimer le post ?")) {
			// DELETE request using fetch inside useEffect React hook
			fetch(
				`http://localhost:4000/api/post/${props.id}`,
				{
					method: 'DELETE',
					headers: {
						'Authorization': `Bearer ${userData.token}`
					  },
				}
			)
			.then(function(res) {
				if(res.ok) {
					return res.json();
				} else {
					throw res.statusText;
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
				<div className="post-author">{emailUser}</div>
				<div className='post-date' format="DD-MM-YY">{date.toLocaleString()}</div>
			</div>
			<div className="post-details shadow-gray">
				<button onClick={doLike} className={[likeActive ? "post-likes":null, 'button'].join(' ')}>♥ Like ({like})</button>
				<button onClick={doDislike} className={[dislikeActive ? "post-dislikes":null, 'button'].join(' ')}>♥ Dislike ({dislike})</button>
				{(userData.isAdmin === true || userData.userId === props.userId) && (
					<button onClick={routeChange} className="post-update">Update</button>
				)}
				{(userData.isAdmin === true || userData.userId === props.userId) && (
					<button onClick={deletePost} className="post-delete">Delete</button>
				)}
			</div>
		</li>
	)
}

export default Post;



