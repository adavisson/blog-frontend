import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Blogs from './components/Blogs';
import NewBlog from './components/NewBlog';
import EditBlogs from './components/EditBlogs';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/blogs" component={Blogs} />
        <Route path="/blogs/new" component={NewBlog} />
        <Route path="/blogs/edit" component={EditBlogs} />
      </div>
    </Router>
  );
}

export default App;