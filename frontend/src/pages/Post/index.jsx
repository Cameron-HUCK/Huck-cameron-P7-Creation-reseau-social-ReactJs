import React from "react";
import Postform from '../../components/PostForm/index'
function AddPost () {
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