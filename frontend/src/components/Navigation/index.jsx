import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logout from '../../assets/logo-groupomania/logo-logout.png';
import UidContext from '../../utils/context'

const Navigation = () => {
	const uid = useContext(UidContext);
	console.log(uid);
	return (
		<nav>
			{uid ? (
				<ul>
					<div className='flex-link'>
						<li>
							<Link to="/">Home</Link>
						</li>
					</div>	
					<div className='flex-link'>
						<li>
							<Link to="/post">Post</Link>
						</li>
					</div>	
					<div className='flex-link'>
						<li>
							<Link to="/auth">Auth</Link>
						</li>
					</div>	
				</ul>
			) : (
			<ul>
				<div className="nav-container">
					<div className='flex-link'>
						<li>
							<Link to="/">Home</Link>
						</li>
					</div>	
					<div className='flex-link'>
						<li>
							<Link to="/post">Post</Link>
						</li>
					</div>
					<div className="logo-logout">
						<Link to="/auth">
							<img src={Logout} aria-hidden alt="logout"></img>
						</Link>  
					</div>	
				</div>
			</ul>	
			)}
		</nav>
	);
}
export default Navigation;
