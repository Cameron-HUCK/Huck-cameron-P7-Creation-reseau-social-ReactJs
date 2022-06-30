//import Thread from "../../utils/Context/Thread";
import Card from '../../components/Card/index'

const cardPost = [
  {
    name: 'userId',

  }
]

function Home () {
    return (
    <section>
      <div className='title'>
        <h1>Home</h1>
      </div>
      <div className='section-page'>
        {cardPost.map((profile, index) => (
         <Card 
          key={`${profile.name}-${index}`}
          label={profile.name}
          title = {profile.name}
         /> 
        ))}
        <div className='left-bloc'>
        </div>
        <div className="right-bloc">
        </div>
      </div> 
    </section>
  );
}
export default Home;
