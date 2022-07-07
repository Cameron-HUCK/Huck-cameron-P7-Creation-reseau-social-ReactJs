import { useEffect } from 'react';
import Card from '../../components/Card/index';

function Home () {
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}api/post`)
    .then(function(res) {
      if(res.ok) {
        return res.json();
      }
    })
    .then(function(data) {
      console.log(data);
      let posts = data;
    })
    .catch(function(err) {
      console.log(err);
    })
  }, [])
  const postList = [ {
    userId: { type: String, required: true },
    title: { type: String, required: true, maxlength : 500},
    message: { type: String, required: true, maxlength : 500},
    imageUrl: { type: String, required: true },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    usersLiked: { type: ['String<userID>'], required: true },
    usersDisliked: { type:['String<userID>'], required: true },
  }
  ]
    return (
    <section>
      <div className='title'>
        <h1>Home</h1>
      </div>
      {postList.map((post, index) => (
          <Card
              key={`${post.userId}-${index}`}
              title={post.title}
              message={post.message}
              imageUrl={post.imageUrl}
          />
      ))}
        <div className='left-bloc'>
        </div>
        <div className="right-bloc">
        </div> 
    </section>
  );
}
export default Home;
