import React from "react";
import { Link } from "react-router-dom";
import Logout from '../../assets/logo-groupomania/logout.png';

const Navigation = () => {
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
						<Link to="">
							<img src={Logout} className='logo-logout' aria-hidden alt="logout"></img>
						</Link>
				</div>			
			</ul>	
		</nav>
	);
}
export default Navigation;
