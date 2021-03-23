import React from 'react';
import Home from './components/Home';
import { Route, Switch } from 'react-router-dom'
import Login from './components/Login/Login';
import SignUp from './components/Signup/SignUp';
import { PostProvider } from './context/PostContext'


const App = () => {


  return (
    <PostProvider>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </PostProvider>
  );
}

export default App;
