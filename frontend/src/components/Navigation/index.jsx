import React from "react";
import { Link } from "react-router-dom";
import Logout from '../../assets/logo-groupomania/logout.png';
import { useNavigate } from 'react-router-dom';
import { getUserData } from "../../utils/lib";

const Navigation = () => {

	// Localstorage recovery of the token, userId
	let userData = getUserData();
	console.log(userData.token);

	// Redirect to the post page
	let navigate = useNavigate();

	// Logout
	function removeUserData(){
		if (window.confirm("Êtes-vous certain(e) de vouloir vous deconnecter ?")){
			localStorage.removeItem('userData');
			navigate('signin');
		}
	}

	return (
		<nav>
			<ul>
				<div className="flex-link">
					<div className='nav-container'>
						{(userData !== false) && (
							<li>
								<Link to="/">Home</Link>
							</li>
						)}
					</div>
					<div className='nav-container'>
						{(userData !== false) && (
							<li>
								<Link to="/create">Create</Link>
							</li>
						)}
					</div>	
					<div className='nav-container'>
						{(userData === false) && (
							<li>
								<Link to="/signup">Signup</Link>
							</li>
						)}
					</div>
					<div className='nav-container'>
						{(userData === false) && (
							<li>
								<Link to="/signin">Signin</Link>
							</li>
						)}
					</div>
					{(userData !== false) && (
						<li onClick={removeUserData}>
							<img src={Logout} className='logo-logout' aria-hidden alt="logout"></img>
						</li>
					)}
				</div>
			</ul>	
		</nav>
	);
}

export default Navigation;
