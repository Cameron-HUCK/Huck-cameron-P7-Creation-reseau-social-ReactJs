import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../../pages/Home';
import Signin from '../../pages/Auth/Signin';
import Signup from '../../pages/Auth/Signup';
import Create from '../../pages/Post';
import NotFound from '../../pages/NotFound';
import UpdatePost from "../../pages/Update-post/index.jsx";

// Creation of navigation routes
const Content = () => {
	return (
		<div className="content">
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/create" element={<Create/>} />
				<Route path="/signup" element={<Signup/>} />
				<Route path="/signin" element={<Signin/>} />
				<Route path="/update/:id" element={<UpdatePost/>} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default Content;
