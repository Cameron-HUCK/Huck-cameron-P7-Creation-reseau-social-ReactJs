import React from "react";
import { useNavigate} from 'react-router-dom';

function Post(props) {
	
	let navigate = useNavigate();
	const routeChange = (data) => {
		navigate(`/update/${props.id}`);
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
				<div className='post-date' format="DD-MM-YY">{props.createdAt}</div>
			</div>	
			<div className="post-details shadow-gray">
				<button className="post-likes">♥ Like</button>
				<button className="post-dislikes">♥ Dislike</button>
				<button onClick={routeChange} className="post-update">Update</button>
				<button className="post-delete">Delete</button>
			</div>
		</li>
	)
}

export default Post;
