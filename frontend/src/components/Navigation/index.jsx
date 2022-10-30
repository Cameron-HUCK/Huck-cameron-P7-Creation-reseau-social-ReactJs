import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logout from '../../assets/logo-groupomania/logout.png';
import { useNavigate } from 'react-router-dom';
import { getUserToken } from "../../utils/lib";


const Navigation = () => {

  // Recuperation localstorage du token, userId
  let userToken = getUserToken();
  console.log(userToken.token);

	// Redirection vers la page du post
	let navigate = useNavigate();
	// Logout
	function removeUserToken(){
		if (window.confirm("Êtes-vous sur(e) de vouloir vous deconnecté ?")){
			localStorage.removeItem('dataUser');
			navigate('signin');
		}
	}
	return (
		<nav>
			<ul>
				<div className="flex-link">
					<div className='nav-container'>
						<li>
							<Link to="/">Home</Link>
						</li>
					</div>	
					<div className='nav-container'>
						<li>
							<Link to="/create">Create</Link>
						</li>
					</div>	
					<div className='nav-container'>
						<li>
							<Link to="/signup">Signup</Link>
						</li>
					</div>
					<div className='nav-container'>
						<li>
							<Link to="/signin">Signin</Link>
						</li>
					</div>
					<li onClick={removeUserToken}>
						<img  src={Logout} className='logo-logout' aria-hidden alt="logout"></img>
					</li>	
				</div>			
			</ul>	
		</nav>
	);
}
export default Navigation;
