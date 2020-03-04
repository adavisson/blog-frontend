import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
