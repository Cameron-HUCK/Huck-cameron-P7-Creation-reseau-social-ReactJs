import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../../pages/Home';
import Auth from '../../pages/Auth';
import Post from '../../pages/Post';

const Content = () => {
	return (
		<div className="content">
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/auth" element={<Auth/>} />
				<Route path="/post" element={<Post/>} />
			</Routes>
		</div>
	);
}

export default Content;
