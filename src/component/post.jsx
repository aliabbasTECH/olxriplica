import React from 'react';
import logo from '../images/logoolx.png';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import {Link} from "react-router-dom";

class Post extends React.Component  {
    render() {
        return (
            <div>
             <div className="postheader flex aCenter">
                 <div className="backbutn"><Link to="/"> <button className="barro"><ArrowBackIcon style={{ fontSize: 25 }}  /> </button></Link></div>
                 <div className="logopost"><Link to="/"><img src={logo} alt="" width={48} /></Link></div>
             </div>

             <div className="container pcon">
                 <h2 className="htitle  tCenter">POST YOUR AD</h2>
                  <div className="incont ">
                    <h4 className="chooseC siz16 b">CHOOSE A CATEGORY</h4>
                    <div className="catli color2"> 

                        <Link to="/Attr"> <li  class="Drb bbn flex siz16 " > <PhoneIphoneIcon/><p>Mobiles</p> <ArrowForwardIosIcon/></li> </Link>
                          
                        <Link to="/Attr"> <li  class="Drb bbn flex siz16 " > <PhoneIphoneIcon/>  <p>vehicles</p>  <ArrowForwardIosIcon/> </li></Link>
                         
                        <Link to="/Attr"><li  class="Drb bbn flex siz16 " > <PhoneIphoneIcon/> <p>Property For Sale</p>  <ArrowForwardIosIcon/> </li></Link>

                        <Link to="/Attr"><li  class="Drb bbn flex siz16" > <PhoneIphoneIcon/> <p>Property For Rent</p>  <ArrowForwardIosIcon/> </li></Link>
                          
                        <Link to="/Attr"> <li  class="Drb bbn flex siz16" > <PhoneIphoneIcon/> <p> Electronics And Home</p>  <ArrowForwardIosIcon/>  </li></Link>
                            
                        <Link to="/Attr"> <li  class="Drb bbn flex siz16 " >  <PhoneIphoneIcon/> <p>Bikes</p>  <ArrowForwardIosIcon/></li></Link>
 
                        <Link to="/Attr"><li  class="Drb bbn flex siz16" > <PhoneIphoneIcon/> <p>Business,Industrial Agriculture</p>  <ArrowForwardIosIcon/></li></Link>
                          
                        <Link to="/Attr"> <li  class="Drb bbn flex siz16" ><PhoneIphoneIcon/> <p> Services</p>  <ArrowForwardIosIcon/></li></Link>

                        <Link to="/Attr"> <li  class="Drb bbn flex siz16" > <PhoneIphoneIcon/> <p> Jobs </p>  <ArrowForwardIosIcon/></li></Link>
  
                        <Link to="/Attr"> <li  class="Drb bbn flex siz16" > <PhoneIphoneIcon/> <p> Animals </p>  <ArrowForwardIosIcon/> </li></Link>
  
                        <Link to="/Attr"> <li  class="Drb bbn flex siz16" ><PhoneIphoneIcon/> <p> Furniture & Home Decor </p>  <ArrowForwardIosIcon/> </li></Link>
  
                        <Link to="/Attr"> <li  class="Drb bbn flex siz16 " ><PhoneIphoneIcon/> <p>  Fashion & Beauty </p>  <ArrowForwardIosIcon/></li></Link>

                        <Link to="/Attr"> <li  class="Drb bbn flex siz16" > <PhoneIphoneIcon/> <p> Books, Sports & Hobbies </p>  <ArrowForwardIosIcon/> </li></Link>
  
                        <Link to="/Attr"> <li  class="Drb bbn flex  siz16" ><PhoneIphoneIcon/> <p>Kids </p>  <ArrowForwardIosIcon/></li></Link>
                               
  


             </div>
            </div>
          </div>  

          
                    
                        <div className="sfooter flex">
                        <h2 className="cfff font siz14">Other Countries India - South Africa - Indonesia</h2>
                        <h2 className="r cfff font siz14">Free Classifieds in Pakistan .@ 2006-2020 OLX</h2>
                        </div>            
       </div>
            
        );
    }
}

export default Post;