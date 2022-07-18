import React from "react";
import AddCardPost from '../../components/Card/index'
function AddPost () {
    return (
        <section>
            <div className='title'>
                <h1>Add Your Post</h1>
            </div>
            <ul className='send-post'>
                <div id="add-post">
                    <AddCardPost />
                </div>
            </ul>
        </section>
    )
}

export default AddPost;