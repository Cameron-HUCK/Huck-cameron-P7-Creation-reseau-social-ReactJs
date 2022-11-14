import React from "react";
import Postform from '../../components/PostForm/index'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getUserToken } from "../../utils/lib";

function AddPost () {

		let navigate = useNavigate();
	  // Recuperation localstorage du token, userId
		let userToken = getUserToken();

	  useEffect(() => {
	  	if(userToken === false) {
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