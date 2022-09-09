import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../../pages/Home';
import Signin from '../../pages/Auth/Signin';
import Signup from '../../pages/Auth/Signup';
import Create from '../../pages/Post';

const Content = () => {
	return (
		<div className="content">
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/Create" element={<Create/>} />
				<Route path="/signup" element={<Signup/>} />
				<Route path="/signin" element={<Signin/>} />
			</Routes>
		</div>
	);
}

export default Content;
