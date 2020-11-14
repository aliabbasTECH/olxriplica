import React from 'react';
import { Fade } from 'react-slideshow-image';
import './component.css'
import img1 from '../images/bulb.png';
import img2 from '../images/car1.png';
import img3 from '../images/car2.png'

const FadeExample = () => {
  const fadeImages = [
    img1 ,
    img2,
    img3
  ];

  return (
    <div>
      
      <div className="slide-container">
        <Fade>
          <div className="each-fade">
            <div>
              <img src={fadeImages[0]} />
            </div>
           
          </div>
          <div className="each-fade">
        
            <div>
              <img src={fadeImages[1]} />
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img src={fadeImages[2]} />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default FadeExample;