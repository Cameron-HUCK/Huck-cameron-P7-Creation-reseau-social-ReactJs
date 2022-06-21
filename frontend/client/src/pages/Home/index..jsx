import React from "react";
import {
  BrowserRouter as Routes,
  Link
} from "react-router-dom";

function home() {
  return (
    <Routes>
      <div className ='barre-Nav'>
        <h1>Home</h1>
        <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/auth">Auth</Link>
              </li>
              <li>
                <Link to="/post">Post</Link>
              </li>
            </ul>
          </nav>
      </div>
      </Routes>  
  );
}
export default home;