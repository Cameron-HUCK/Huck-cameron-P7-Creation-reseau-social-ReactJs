import React from "react";
import { useParams } from "react-router-dom"
import UpdateForm from '../../components/PostForm/UpdateForm'
function UpdatePost () {

    let posts = useParams();
	console.log(posts)
    
    return (
        <section>
            <div className='title'>
                <h1>Update</h1>
            </div>
            <ul className='send-post'>
                <div id="add-post">
                    <UpdateForm />
                </div>
            </ul>
        </section>
    )
}

export default UpdatePost;