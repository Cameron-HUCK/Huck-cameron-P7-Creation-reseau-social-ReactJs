import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from '../pages/Home';
import Auth from '../pages/Auth';
import Post from '../pages/Post';
 
function Index () {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/post" element={<Post />} />
    </Routes>
  </BrowserRouter>
};
export default Index