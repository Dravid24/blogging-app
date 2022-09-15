import './App.css';
import {BrowserRouter, Route,Switch } from 'react-router-dom';

import { createBrowserHistory as history} from 'history';


import Home from './component/Home';
import Login from './component/Login';
import Signup from './component/Signup';
import check from './component/check';
import ListofBlog from './component/ListofBlog';
import Blog from './component/Blog';


function App() {
  return (
    
    <BrowserRouter history={history}>
    <Switch>
      <Route exact path='/' component={Login} />
      <Route exact path='/user/:id' component={Home} />
      <Route exact path='/check' component={check} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={Signup} />
      <Route exact path='/blogs' component={ListofBlog} />
      <Route exact path='/blogs/:id' component={Blog} />
      </Switch>
    </BrowserRouter> 
  );
}

export default App;
