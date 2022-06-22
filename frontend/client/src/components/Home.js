
import '../styles/home.css'
function home() {
    return (
        <nav>
            <div className ='barre-Nav'>
                <div className ="first-nav">
                    <h1>Home</h1>
                </div>
                <div className ="second-nav">
                    <p>Logo !!</p>
                </div>
                <div className ="third-nav">
                    <ul>
                    <div className ="flex-li">
                        <li>
                            Home
                        </li>
                    </div>    
                    <div className ="flex-li">
                        <li>
                            Ajouter ou Modifer Post
                        </li>
                    </div>    
                    <div className ="flex-li">
                        <li>
                            Signup/Login
                        </li>
                    </div>    
                    </ul>
                </div>
            </div>
        </nav>
    );
  }
  export default home;