import { useEffect, useState } from 'react';
import Post from '../../components/Post/index';


function Home () {

  const [posts, setPosts] = useState([]);

    useEffect(() => {
      fetch(`http://localhost:4000/api/post`)
      .then(function(res) {
        if(res.ok) {
          return res.json();
        }
      })
      .then(function(data) {
        setPosts(data);
      })
      .catch(function(err) {
        console.log(err);
      })
    }, [])
    
    console.log(posts);
    return (
      <section>
			<div className='title'>
				<h1>Home</h1>
			</div>
			<div className='section-page'>
        <div className='left-bloc'></div>
          <div id="posts">
          <div className='bloc-center'>POST</div>
            <ul id="posts-list">
              {posts.map((post, index) => (
                <Post
                  title={post.title}
                  message={post.message}
                  imageUrl={post.imageUrl}
                  userId={post.userId}
                />
              ))}
            </ul>
          </div>
          <div className="right-bloc"></div>
        </div>
		</section>
  );
}
export default Home;
