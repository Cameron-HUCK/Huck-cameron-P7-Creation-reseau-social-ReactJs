//import Thread from "../../components/Context/Thread";

const Home = () => {
  return (
    <section>
      <div className='title'>
        <h1>Home</h1>
      </div>
      <div className='section-page'>
        <div className='left-bloc'>
          <p> Je sais pas encore mais c'est le bloc de gauche</p>
        </div>
        <div className='thread-bloc'>
            <h2>Les posts</h2>
            <div className='scroll'>
              <p>bloc pour les posts</p>
              <div className="card">
                <p>Ou seront les posts</p>
              </div>
            </div>  
        </div>
        <div className="right-bloc">
          <p>Je sais pas encore mais les c'est le bloc de droite</p>
        </div>
      </div> 
    </section>
  );
}

export default Home;
