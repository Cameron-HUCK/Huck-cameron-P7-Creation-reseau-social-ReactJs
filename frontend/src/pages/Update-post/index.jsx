import React  from "react";
import UpdateForm from '../../components/PostForm/UpdateForm'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getUserData } from "../../utils/lib";

function UpdatePost () {

		let navigate = useNavigate();
	  // Recuperation localstorage du token, userId
		let userData = getUserData();

	  useEffect(() => {
	  	if(userData === false) {
				navigate(`/signin`);
	  	}
	  });

    return (
        <section>
            <div className='title'>
                <h1>Update</h1>
            </div>
            <ul className='send-post'>
                <div id="add-post">
                    <UpdateForm/>
                </div>
            </ul>
        </section>
    )
}

export default UpdatePost;