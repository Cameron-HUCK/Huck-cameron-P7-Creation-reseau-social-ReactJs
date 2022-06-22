import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
	return (
		<nav>
				<ul>
				<div className='flex-link'>
					<li>
						<Link to="/">Home</Link>
					</li>
				</div>	
				<div className='flex-link'>
					<li>
						<Link to="/auth">Auth</Link>
					</li>
				</div>	
				<div className='flex-link'>
					<li>
						<Link to="/post">Post</Link>
					</li>
				</div>	
				</ul>
		</nav>
	);
}

export default Navigation;
