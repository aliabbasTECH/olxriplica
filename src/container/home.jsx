import React, { useEffect ,useState } from 'react';
import AdItem from '../component/aditem';
import rimage from '../images/footerBanner.png';
import Header from './Header.jsx';
import Footer from './footer.jsx';
import {Link} from "react-router-dom";
import img1 from '../images/car1.png';
import img2 from '../images/car2.png';
import img3 from '../images/car3.png';
import img4 from '../images/car4.png';
import img5 from '../images/iphone6s.png';
import img6 from '../images/danyTab.png';
import img7 from '../images/samsung galaxy s10.png';
import img8 from '../images/toyota prius Alpha.png';
import img9 from '../images/shoprent1.png';
import img10 from '../images/Smarttv.png';
import img11 from '../images/bikesuperpower.png';
import img12 from '../images/printing paprs.png';

function Home () {

    const img = [
        img1 ,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img11,
        img12
      ];
    
   
    //    const [list, setList] = useState([]); 
    //    const [loading,setLoading] = useState(true);

    //   useEffect (()=>{
    //     if(loading){
    //         let _list =[];
    //          for(let i = 0 ; i< 20  ; i++){
    //              _list.push(<AdItem placeholder={true} />);
    //          }
    //          setList(_list);
    //       }
      
    //   }, list);
      

        return (
            <React.Fragment >
             <Header />

             <div className="home-page ">
                <div className="ad-list flex">
                 
                 <Link to="/page" className="ad-list flex"> <AdItem image={img[0]} title="100,000"  tagline="suzuki cltus good condition" location="karachi" date="today" />  </Link>
                 <Link to="/page" className="ad-list flex"> <AdItem image={img[1] } title="500,0000"  tagline="chupi hui car not in good condition" location="lahor" date="yesterday" />  </Link>
                 <Link to="/page" className="ad-list flex"> <AdItem image={img[2]} title="300,00"  tagline="toyota 1997" location="fasilabad" date="2015" />  </Link>
                 <Link to="/page" className="ad-list flex"> <AdItem image={img[3] } title="400,0000"  tagline="suzuki cults 2015 " location="islamabad" date="2019" />  </Link>
                 <Link to="/page" className="ad-list flex"> <AdItem image={img[4] } title="55,000"  tagline="fazul ki Qemat" location="" date="jun 2020" />  </Link>
                 <Link to="/page" className="ad-list flex"> <AdItem image={img[5] } title="3000"  tagline="dany tab only for movies" location="turkey" date="may 2019" />  </Link>
                 <Link to="/page" className="ad-list flex"> <AdItem image={img[6]} title="5,5888"  tagline="samsung galaxy s10 " location="gulshan e hadeed" date="apr 2020" />  </Link>
                 <Link to="/page" className="ad-list flex"> <AdItem image={img[7]} title="70,900"  tagline=" toyota pirus Alpa" location="ghlshan e hadeed ph1" date="mon" />  </Link>
                 <Link to="/page" className="ad-list flex"> <AdItem image={img[8]} title="40,90"  tagline="shop on rent " location=" africa" date="2017" />  </Link>
                 <Link to="/page" className="ad-list flex"> <AdItem image={img[9]} title="78,90000"  tagline="galaxy tv smart" location="china" date="may 2018" />  </Link>
                 <Link to="/page" className="ad-list flex"> <AdItem image={img[10]} title="65,080"  tagline="superpower bike 125cc" location="pakintan" date="oct 2019" />  </Link>
                 <Link to="/page" className="ad-list flex"> <AdItem image={img[11]} title="65,0800"  tagline="A4 size papers and more" location="rawlpindi" date="" />  </Link>
   
              

                </div>
                
                <button className="load-more fonto c333  anim siz 18">
                 load more
                </button> 
                
             </div>

             <div className="app-ribbon flex aCenter ">
                <div className="img">
                    <img className="bl" src={rimage} alt="" />
                </div>
                <div className="meta">
                   <h2 className="title fontb siz30 color"> TRY THE OLX APP  </h2>
                   <h2 className="text font siz18 color"> Buy, sell and find just about anything using the app on your mobile.  </h2>
                </div>
                <div className="links">
                    <h2 className="title fonto siz20"></h2>
                    <div className="flex ac">
                      <a href="#" className="noul bl"> <img src="https://statics.olx.com.pk/external/base/img/appstore_2x.png" alt="ios-app-store" class="_10wyb"></img> </a>
                      <a href="#" className="noul bl"> <img src="https://statics.olx.com.pk/external/base/img/playstore_2x.png" alt="android-app-store" class="_10wyb"></img> </a>
                    </div>
                </div>
             </div>
             <Footer/>

             </React.Fragment>
        );
    }


export default Home;