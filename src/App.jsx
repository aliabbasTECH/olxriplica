import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sp.css';
import './App.css';
import { BrowserRouter as Router,  Route } from 'react-router-dom';
import Routlinks from './container/routlink'
// import Home from './components/home';
 
// import Main from './components/main.jsx';


class App extends  Component{
  render(){
    return (
    <div>
     <Routlinks/>
    </div>
      )   
    
  };
}

export default App;