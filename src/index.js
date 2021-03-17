import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { PostProvider } from "./context/PostContext";
import './index.css';
import App from './App';


const rootElement = document.getElementById('root');


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <PostProvider>
        <App />
      </PostProvider>
    </Router>
  </React.StrictMode>
  ,
  rootElement
);

