import React from 'react';
import Home from './components/Home';
import { Route, Switch } from 'react-router-dom'
import Login from './components/Login/Login';
import SignUp from './components/Signup/SignUp';
import { PostContextProvider } from './context/PostContext'


const App = () => {


  return (
    <PostContextProvider>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <>
          <Home />
        </>
      </Switch>

    </PostContextProvider>
  );
}

export default App;
