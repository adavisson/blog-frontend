import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from './components/Home';
import Blogs from './components/Blogs';
import NewBlog from './components/NewBlog';

function App() {
  return (
    <Router>
      <div className="App">
        <a href='/'>Home</a>
        <Route exact path="/" component={Home} />
        <Route exact path="/blogs" component={Blogs} />
        <Route path="/blogs/new" component={NewBlog} />
      </div>
    </Router>
  );
}

export default App;