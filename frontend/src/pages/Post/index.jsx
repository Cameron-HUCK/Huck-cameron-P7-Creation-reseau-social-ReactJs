import React from "react";
import Postform from '../../components/PostForm/index'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getUserData } from "../../utils/lib";

function AddPost () {

    // Redirect function
	let navigate = useNavigate();

	// Localstorage recovery of the token, userId
	let userData = getUserData();

	useEffect(() => {
	  	if(userData === false) {
				navigate(`/signin`);
	  	}
	});

    return (
        <section>
            <div className='title'>
                <h1>Create</h1>
            </div>
            <ul className='send-post'>
                <div id="add-post">
                    <Postform />
                </div>
            </ul>
        </section>
    )
}

export default AddPost;