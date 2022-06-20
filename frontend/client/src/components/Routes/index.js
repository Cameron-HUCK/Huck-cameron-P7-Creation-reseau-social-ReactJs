import {React,Switch, Redirect} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import authentification from '../../pages/auth';
import home from '../../pages/home';
import post from '../../pages/post';

const index = () => {
  return (
    <Router >
        <Switch>
            <Route path="/auth" exact component={authentification} />
            <Route path="/" exact component ={home} />
            <Route path="/post" exact component ={post} />
            <Redirect to="/" />
        </Switch>
    </Router>
  );
};
export default index;
