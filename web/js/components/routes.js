import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from './app';
import FrontPage from './frontPage';
import BlogList from './blog/blogs';
import BlogPost from './blog/blog';
import About from './about';
import Login from './login/login';
import PageNotFound from './pageNotFound';

export default ({ history }) => (
  <Router history={history}>
    <Route path='/' component={App}>
      <IndexRoute component={FrontPage}/>
      <Route path='blog' component={BlogList}/>
      <Route path='blog/:blogId' component={BlogPost}/>
      <Route path='blog/*' component={BlogPost}/>
      <Route path='about' component={About}/>
      <Route path='login' component={Login}/>
      <Route path='*' component={PageNotFound}/>
    </Route>
  </Router>
);