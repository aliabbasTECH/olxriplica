import React, { Component } from 'react';
import AdItem from '../component/aditem';
import {Link} from "react-router-dom";
import Header from '../container/Header';
import Footer from '../container/footer.jsx';
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
import {Mobiles,Cars, Motorcyclea, Houses,TvVideoAudio  , Tablets, LandPlot } from '../component/filter'
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
class Mobilepage extends Component {
     
    render() {
   
        return (
   
            <div>
                <Header />
                <div className="container catpage_container ">
                    <div className="catnav"></div>
                    <h1>Mobile Phones</h1>
                    <div className="inercontainer flex">
                        <div className="filter">
                        <Mobiles/>
                        </div>
                        <div className="productcards">
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
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}



class Carspage extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container catpage_container ">
                    <div className="catnav"></div>
                    <h1 className="siz24 b">Cars</h1>
                    <div className="inercontainer flex">
                        <div className="filter">
                        <Cars/>
                        </div>
                        <div className="productcards">
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
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

class Motorcycleapage extends Component {
    render() {
        return (
            <div>
                 <Header />
                <div className="container catpage_container ">
                    <div className="catnav"></div>
                    <h1 className="siz24 b">Motorcyclea</h1>
                    <div className="inercontainer flex">
                        <div className="filter">
                        <Motorcyclea/>
                        </div>
                        <div className="productcards">
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
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}


class Housespage extends Component {
    render() {
        return (
            <div>
                  <Header />
                <div className="container catpage_container ">
                    <div className="catnav"></div>
                    <h1 className="siz24 b">Houses</h1>
                    <div className="inercontainer flex">
                        <div className="filter">
                        <Houses/>
                        </div>
                        <div className="productcards">
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
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

class TvVideoAudiopage extends Component {
    render() {
        return (
            <div>
                 <Header />
                <div className="container catpage_container ">
                    <div className="catnav"></div>
                    <h1 className="siz24 b">TV-Video-Audio</h1>
                    <div className="inercontainer flex">
                        <div className="filter">
                        <TvVideoAudio/>
                        </div>
                        <div className="productcards">
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
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}


class Tabletspage extends Component {
    render() {
        return (
            <div>
               <Header />
                <div className="container catpage_container ">
                    <div className="catnav"></div>
                    <h1 className="siz24 b">TABLETS</h1>
                    <div className="inercontainer flex">
                        <div className="filter">
                        <Tablets/>
                        </div>
                        <div className="productcards">
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
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}


class LandPlotpage extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container catpage_container ">
                    <div className="catnav"></div>
                    <h1 className="siz24 b">Land & Plots</h1>
                    <div className="inercontainer flex">
                        <div className="filter">
                        <LandPlot/>
                        </div>
                        <div className="productcards">
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
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export  { Mobilepage, Carspage,Motorcycleapage,Housespage, TvVideoAudiopage,Tabletspage, LandPlotpage};