import { useEffect, useState } from 'react';
import Post from '../../components/Post/index';
import styled, { keyframes } from 'styled-components';

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

  const [posts, setPosts] = useState([]);
  const [isDataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    setDataLoading(true)
    fetch(`http://localhost:4000/api/post`)
      .then(function (res) {
        if (res.ok) {
          return res.json();
        }
      })
      .then(function (data) {
        setPosts(data);
      })
      .catch(function (err) {
        console.log(err);
      })
    setDataLoading(false)
  }, [])

  console.log(posts);
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
                  id={post._id}
                  title={post.title}
                  message={post.message}
                  imageUrl={post.imageUrl}
                  userId={post.userId}
                  createdAt={post.createdAt}
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
