import React from 'react';
import {
    BrowserRouter as Router,
    Route, } from "react-router-dom";

import Home from './home'
import Post from '../component/post.jsx'
import Attr from '../component/postdata.jsx'
import Pages from './page'
import {
    Mobilepage, 
    Carspage,
    Motorcycleapage,
    Housespage,
     TvVideoAudiopage,
     Tabletspage, 
     LandPlotpage
} from '../Pages/catpages';

import Chat from '../chat app/chat/index'



  class Routlinks extends React.Component {
      render(){
          return (
              <Router>
                  <Route exact path='/' component={Home} />
                  <Route  path='/post' component={Post} />
                  <Route  path='/Attr' component={Attr} />
                  <Route  path='/page' component={Pages} />
                  <Route  path='/MobilePhone' component={Mobilepage} />
                  <Route  path='/Cars' component={Carspage} />
                  <Route  path='/MotorCycles' component={Motorcycleapage} />
                  <Route  path='/House' component={Housespage} />
                  <Route  path='/TvVideoAudio' component={TvVideoAudiopage} />
                  <Route  path='/Tablets' component={Tabletspage} />
                  <Route  path='/LandAndplots' component={LandPlotpage} />
                  <Route  path='/chat' component={Chat} />
                  
                  
                    
              </Router>
          )
      }
  }

  export default Routlinks;