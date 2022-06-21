import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/utils/styles/index.scss'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/index.';
import Auth from './pages/Auth/index';
import Post from './pages/Post/index.';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} >
        </Route>
        <Route path="/auth" element={<Auth />} >
          </Route>
        <Route path="/post" element={<Post />}>
          </Route>
      </Routes>
    </BrowserRouter>
    </React.StrictMode>
)

