import React  from "react";
import UpdateForm from '../../components/PostForm/UpdateForm'

function UpdatePost () {
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