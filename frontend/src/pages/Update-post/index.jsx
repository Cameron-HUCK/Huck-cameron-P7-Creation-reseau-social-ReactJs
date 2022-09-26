import React, { useEffect, useState }  from "react";
import UpdateForm from '../../components/PostForm/UpdateForm'

function UpdatePost () {
    //Recupartion des donnees du post
    const [postsUpdate, setpostsUpdate] = useState([]);
  
    useEffect(() => {
      fetch(`http://localhost:4000/api/post/`)
      .then(function(res) {
        if(res.ok) {
          return res.json();
        }
      })
      .then(function(data) {
        setpostsUpdate(data);
      })
      .catch(function(err) {
        console.log(err);
      })
    }, [])
    console.log(postsUpdate);
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