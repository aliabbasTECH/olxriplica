import React from 'react';
import Header from './Header.jsx';
import Footer from './footer.jsx';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PhoneIcon from '@material-ui/icons/Phone';
import FadeExample  from '../component/imgslidercomponent'
import Chatindex from '../chat app/chathome/cindex'


class Pages extends React.Component {
    render() {
        return (
            
            <div className="main">
                <Header/>
                <div className="container">
                <div className="menuebar"> 
                </div>

                <div className="ads">

                </div>
                <div className="productdetails">
                   <div className="product_container flex">
                       <div className="img_detail_description">
                           <div className="page_image_slider "> <FadeExample/> </div>
                             <div className="detail_description">
                               <div className="details">
                                   <h4 className="page_detail_title">Details</h4>
                                 <ul className="Page_detail_ul">detailfunction </ul>
                              </div>
                             <div className="discription">
                                 <h4 className="Page_discription_title siz18">Description</h4>
                                 <p>"
                                 Hello all

I'm selling my Suzuki Khyber .

Car men below features han. Ghor se parh Len or phr rabta Karen.

Economical Khyber available in metallic shiny grey color.

Petrol & CNG dono working men han. Men zyada petrol par drive karta hon. Nice Allie rim lagy huay Han.

Tax 2016 Tak paid hay, baqi purchase karny Wala pay Kary ga.

Car ki Smooth drive hay or men daily office travel + other work k leay use karta hon. Approx 60KM ki daily drive hy.

Low budget men economical best car hay.

Tires 5 month pehly Daly han. Or denting painting ka Kam 1 week pehly karwaya hay. Ab bilkul new appearance/ look men hay or koi mechanical ya maintenance ka Kam nahi hay.

Just buy Karen or drive Karen.

Complete tool kit available hay or spare wheel b nice condition men hay. Original number plates & tickly lagi hoi hy. Original file mojood hay.

Cplc clear hay.

New seat covers 2 month pehly lagay Han or floor matting b karwai Hy. 65amp battery lagi hoi hay.

Mughy new model ki car Leni or parking space Kam hony ki wajha se ise sale kar Raha hon.

Car men ac nahi hay

0318 two seven seven four four eight four

Almost all matter k bary men uper likha hua hay.

Add complete parh Kar rabta Karen"
                                 </p>

                             </div>
                           </div>
                       </div>


                       <div className="saler_price_description_location">
                             <div className="info_pr_ic_de_lo_da">
                                 <div className="p_i flex">
                                     <h3 className="info_price">Rs 250,000</h3>
                                     <div className="infoicon"> <ShareIcon/> <FavoriteBorderIcon/>  </div> 
                                 </div>
                                 <p className="info_SomeDetail">1990_100,000km</p>
                                 <p className="info_descrip">kam badget men behtrin economicl family car</p>
                                 <span className="location_Date flex">
                                     <p className="info_locate siz12">Gulshan-E-Hadeed, Karachi,Sindh</p>
                                     <p className="info_date siz12 " >Yesterday</p>
                                 </span>
                             </div>
                             
                             <div className="sellerDescrip">
                                   <h5>Seller Description</h5>  
                                 <div className="profile">
                                    <div className="flex">
                                      <img src="" alt=""/>
                                       <div className="seller_name aCenter">
                                         <div className="name">name</div>
                                         <div className="memberShipDate">member since:</div>
                                       </div>

                                      </div>
                                      <div className="tCenter">
                                        <div className="buttton"><Chatindex/></div>
                                      <div className="number flex"> <PhoneIcon/> <p className="number">**********</p>show number </div>
                                      </div>
                                 </div>

                                 
                             </div>

                       </div>
                   </div>
                </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Pages;