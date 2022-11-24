import { useEffect, useState } from 'react';
import Post from '../../components/Post/index';
import styled, { keyframes } from 'styled-components';
import { setUserData, getUserData } from "../../utils/lib";
import { useNavigate } from 'react-router-dom';

// CSS loader !
const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
 
    to {
    transform: rotate(360deg);
    }
`
export const Loader = styled.div`

  animation: ${rotate} 1s infinite linear;
  border: 6px solid #FD2D01;
  border-radius: 22px;
  border-bottom-color: transparent;
  animation-name: animation-post;
  width: 10px;
  height: 10px;
`

function Home() {
  
  let navigate = useNavigate();
  // Display the post
  const [posts, setPosts] = useState([]);
  const [isDataLoading, setDataLoading] = useState(true);

  // Localstorage recovery of the token, userId
	let userData = getUserData();
  
  // Render conditional!
  useEffect(() => {
  	if(userData === false) {
			navigate(`/signin`);
  	}
  	else {
	    setDataLoading(true);
	    fetch(`http://localhost:4000/api/post`,
	      {
	        headers: {
	          'Authorization': `Bearer ${userData.token}`
	          },
	      }
	    )
	      .then(function (res) {
	        if (res.ok) {
	          return res.json();
	        }
	        else {
	        	throw res.statusText;
	        }
	      })
	      .then(function (data) {
	        setPosts(data);
	      })
	      .catch(function (err) {
	        console.log(err);
	        if(err === 'Unauthorized') {
						setUserData({});
						navigate('signin');
	        }
	      })
	    setDataLoading(false)
  	}
  }, [])
  
  return (
    <section>
      <div className='title'>
        <h1>Home</h1>
      </div>
      <div className='section-page'>
        <div id="posts">
          <div className='bloc-center'>Actuality :</div>
          {isDataLoading ? (
            <Loader />
          ) : (
            <ul id="posts-list">
              {posts.map((post, index) => (
                <Post 
                	key={post._id}
                  id={post._id}
                  title={post.title}
                  message={post.message}
                  imageUrl={post.imageUrl}
                  userId={post.userId}
                  createdAt={post.createdAt}
                  likes={post.likes}
                  dislikes={post.dislikes}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
export default Home;
