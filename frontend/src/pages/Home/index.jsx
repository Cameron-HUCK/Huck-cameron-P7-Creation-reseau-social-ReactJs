import { useEffect, useState } from 'react';
//import Card from '../../components/Card/index';
import profilpicture from '../../assets/profile.png'


function Home () {

  const [posts, setPosts] = useState('')
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')

    useEffect(() => {
      fetch(`${process.env.REACT_APP_API_URL}api/post`)
      .then(function(res) {
        if(res.ok) {
          return res.json();
        }
      })
      .then(function(data) {
        const posts = data;
        console.log(posts);
      })
      .catch(function(err) {
        console.log(err);
      })
    }, [])
    
    return (

    <section>
      <div className='title'>
        <h1>Home</h1>
      </div>
      <div className='section-page'>
      <div id="post">
          <div className="user-id-email">
            <img src={profilpicture} aria-hidden alt="profil" width='80px' height='70px' />
            <div id="user-post">
              <span>{posts}</span>
            </div>
          </div>
          <ul id='post-list'>
            <li className='posts-item'>
              <h2 className='post-title'>{title}</h2>
            </li>
            <li>
              <p className='text-to-post'>{message}</p>
            </li>
          </ul>
          <div id="post-image">
            <img src="posts.imageUrl" alt="post"/>
          </div>
        </div>
      </div>
      <div className='left-bloc'>
      </div>
      <div className="right-bloc">
      </div> 
    </section>
  );
}
export default Home;
