import React from 'react'
import ReactDOM from 'react-dom'
import '../src/utils/styles/index.scss'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './pages/Home/index.';
import Auth from './pages/Auth';
import Post from './pages/Post/index.';

ReactDOM.render(
  <React.StrictMode>
    <Router>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/auth">
              <Auth />
            </Route>
            <Route path="/post">
              <Post />
            </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
