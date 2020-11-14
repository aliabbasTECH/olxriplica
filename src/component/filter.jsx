import React, { Component } from 'react';
import './component.css'
import {Link} from "react-router-dom";

class Mobiles extends Component {
    render() {
        return (
            <div>
            <div className="filterdiv">
              <h4 className="siz18">Filter</h4>
                  <div className="inerdiv">
                      
                 <h4 className="Catagory siz18">CATEGORIES</h4>
                    <div className="li"> <Link to="/">All categories</Link> <br/>
                     <Link to="/">Mobiles</Link> <br/>
                     <Link to="/">Tablests</Link> <br/>
                     <Link to="/">Accessories</Link> <br/>
                     </div>
                       
                 <h4 className="Catagory siz18">locations</h4>
                 <div className="li">
                     <Link to="/">Pakistan</Link> <br/>
                     <Link to="/">Sindh</Link> <br/>
                     <Link to="/">Panjab</Link> <br/>
                     <Link to="/">Khyber Paktunkhwa</Link> <br/>
                     <Link to="/">islamabad Capital Territory</Link> <br/>
                     <Link to="/">Blochistan</Link>
                  </div>
                 <h4 className="Catagory siz18">Make</h4>
                 <div className="li">
                     <Link to="/">Samsung</Link> <br/>
                     <Link to="/">Apple</Link> <br/>
                     <Link to="/">Huawei</Link> <br/>
                     <Link to="/">Oppo</Link> <br/>
                     <Link to="/">vIVO</Link> <br/>
                     </div>
            
         
                 <h4 className="Catagory siz18">PRICE</h4>
                  <div className="li">
                      <input className="catagoryInput1" type="text" id="min" placeholder="min" /> 
                      <input className="catagoryInput1" type="text" id="max" placeholder="max" /> 
                      <button>&#62;</button>
                  </div>
                 <h4 className="Catagory siz18">CONDITION</h4>
                      <input className="catagoryInput"  type="checkbox" id="Used" placeholder />used <br />
                      <input className="catagoryInput" type="checkbox" id="New" placeholder />New
         
              </div>
             </div>
              
            </div>
        );
    }
}
class Cars extends Component {
    render() {
        return (
            <div>
                <div className="filterdiv">
              <h4 className="siz18">Filter</h4>
                  <div className="inerdiv">
                      
                 <h4 className="Catagory siz18">CATEGORIES</h4>
                    <div className="li"> <Link to="/">All categories</Link> <br/>
                     <Link to="/">Vechiles</Link> <br/>
                     <Link to="/">Cars</Link> <br/>
                     <Link to="/">Car on unstallments</Link> <br/>
                     <Link to="/">Car accessories</Link> <br/>
                     <Link to="/">Spare parts</Link> <br/>
                     </div>
                       
                 <h4 className="Catagory siz18">locations</h4>
                 <div className="li">
                     <Link to="/">Pakistan</Link> <br/>
                     <Link to="/">Sindh</Link> <br/>
                     <Link to="/">Panjab</Link> <br/>
                     <Link to="/">Khyber Paktunkhwa</Link> <br/>
                     <Link to="/">islamabad Capital Territory</Link> <br/>
                     <Link to="/">Blochistan</Link>
                  </div>
                 <h4 className="Catagory siz18">Make</h4>
                 <div className="li">
                     <Link to="/">Suzuki</Link> <br/>
                     <Link to="/">toyota</Link> <br/>
                     <Link to="/">Honda</Link> <br/>
                     <Link to="/">Daihtsu</Link> <br/>
                     <Link to="/">nissan</Link> <br/>
                     </div>
            
         
                 <h4 className="Catagory siz18">PRICE</h4>
                  <div className="li">
                      <input className="catagoryInput1" type="text" id="min" placeholder="min" /> 
                      <input className="catagoryInput1" type="text" id="max" placeholder="max" /> 
                      <button>&#62;</button>
                  </div>
                  <h4 className="Catagory siz18">Year</h4>
                  <div className="li">
                      <input className="catagoryInput1" type="text" id="min" placeholder="min" /> 
                      <input className="catagoryInput1" type="text" id="max" placeholder="max" /> 
                      <button>&#62;</button>
                  </div>

                 <h4 className="Catagory siz18">Registered in</h4>
                      <input className="catagoryInput"  type="checkbox" id="Used" value="Lahore" />Lahore <br />
                      <input className="catagoryInput" type="checkbox" id="New" value="Karachi" />Karachi<br/>
                      <input className="catagoryInput"  type="checkbox" id="Used" value="Islamabad" />Islamabad <br />
                      <input className="catagoryInput"  type="checkbox" id="Used" value="Unregisterd" />Unregisterd <br />
                      <input className="catagoryInput"  type="checkbox" id="Used" value="Multan" />Multan <br />

                      <h4 className="Catagory siz18">Fule</h4>
                      <input className="catagoryInput"  type="checkbox" id="Used" value="Petrol" />Petrol <br />
                      <input className="catagoryInput" type="checkbox" id="New" value="CNG" />CNG <br/>
                      <input className="catagoryInput"  type="checkbox" id="Used" value="" /> Hybrid<br />
                      <input className="catagoryInput"  type="checkbox" id="Used" value="" />Diesel <br />
                      <input className="catagoryInput"  type="checkbox" id="Used" value="" />LPG <br />

                      <h4 className="Catagory siz18">LMS DRIVEN</h4>
                      <div className="li">
                      <input className="catagoryInput1" type="text" id="min" placeholder="min" /> 
                      <input className="catagoryInput1" type="text" id="max" placeholder="max" /> 
                      <button>&#62;</button>
                      </div>

                      <h4 className="Catagory siz18">CONDITION</h4>
                      <input className="catagoryInput"  type="checkbox" id="Used" value="" />used <br />
                      <input className="catagoryInput" type="checkbox" id="New" value="" />New
         
              </div>
             </div>
            </div>
        );
    }
}
class Motorcyclea extends Component {
    render() {
        return (
            <div>
                 <div className="filterdiv">
              <h4 className="siz18">Filter</h4>
                  <div className="inerdiv">
                      
                 <h4 className="Catagory siz18">CATEGORIES</h4>
                    <div className="li"> <Link to="/">All categories</Link> <br/>
                     <Link to="/">Bikes</Link> <br/>
                     <Link to="/">Motorcyclea</Link> <br/>
                     <Link to="/">spare parts</Link> <br/>
                     <Link to="/">Biclcles</Link> <br/>
                     <Link to="/">ATV & Quads</Link> <br/>
                     <Link to="/">Scooters</Link> <br/>
                    
                     </div>
                       
                 <h4 className="Catagory siz18">locations</h4>
                 <div className="li">
                     <Link to="/">Pakistan</Link> <br/>
                     <Link to="/">Sindh</Link> <br/>
                     <Link to="/">Panjab</Link> <br/>
                     <Link to="/">Khyber Paktunkhwa</Link> <br/>
                     <Link to="/">islamabad Capital Territory</Link> <br/>
                     <Link to="/">Blochistan</Link>
                  </div>
                 <h4 className="Catagory siz18">MAKE</h4>
                 <div className="li">
                     <Link to="/">Hondaa</Link> <br/>
                     <Link to="/">Yamaha</Link> <br/>
                     <Link to="/">Suzuki</Link> <br/>
                     <Link to="/">Otherbikes</Link> <br/>
                     <Link to="/">United</Link> <br/>
                     </div>
            
         
                 <h4 className="Catagory siz18">PRICE</h4>
                  <div className="li">
                      <input className="catagoryInput1" type="text" id="min" placeholder="min" /> 
                      <input className="catagoryInput1" type="text" id="max" placeholder="max" /> 
                      <button>&#62;</button>
                  </div>
                  <h4 className="Catagory siz18">Years</h4>
                   <div className="li">
                      <input className="catagoryInput1" type="text" id="min" placeholder="min" /> 
                      <input className="catagoryInput1" type="text" id="max" placeholder="max" /> 
                      <button>&#62;</button>
                      </div>
                 <h4 className="Catagory siz18">CONDITION</h4>
                      <input className="catagoryInput"  type="checkbox" id="Used" placeholder />used <br />
                      <input className="catagoryInput" type="checkbox" id="New" placeholder />New
         
              </div>
             </div>
            </div>
        );
    }
}
class Houses extends Component {
    render() {
        return (
            <div>
                 <div className="filterdiv">
              <h4 className="siz18">Filter</h4>
                  <div className="inerdiv">
                      
                 <h4 className="Catagory siz18">CATEGORIES</h4>
                    <div className="li"> <Link to="/">All categories</Link> <br/>
                     <Link to="/">Property for sale</Link> <br/>
                     <Link to="/">Land & Plots</Link> <br/>
                     <Link to="/">hpuses</Link> <br/>
                     <Link to="/">Apartment</Link> <br/>
                     <Link to="/">Shops - Offices - Commircial Space</Link> <br/>
                     <Link to="/">Portions & Flors</Link> <br/>
                    
                     </div>
                       
                 <h4 className="Catagory siz18">locations</h4>
                 <div className="li">
                     <Link to="/">Pakistan</Link> <br/>
                     <Link to="/">Sindh</Link> <br/>
                     <Link to="/">Panjab</Link> <br/>
                     <Link to="/">Khyber Paktunkhwa</Link> <br/>
                     <Link to="/">islamabad Capital Territory</Link> <br/>
                     <Link to="/">Blochistan</Link>
                  </div>
                 
                 <h4 className="Catagory siz18">PRICE</h4>
                  <div className="li">
                      <input className="catagoryInput1" type="text" id="min" placeholder="min" /> 
                      <input className="catagoryInput1" type="text" id="max" placeholder="max" /> 
                      <button>&#62;</button>
                  </div>

                  <h4 className="Catagory siz18">BEDROOMS</h4>
                   <div className="li">
                      <input className="catagoryInput1" type="text" id="min" placeholder="min" /> 
                      <input className="catagoryInput1" type="text" id="max" placeholder="max" /> 
                      <button>&#62;</button>
                   </div>
                   
                   <h4 className="Catagory siz18">Area Unit</h4>
                      <input className="catagoryInput"  type="radio" id="Used" placeholder />Kanal <br />
                      <input className="catagoryInput" type="radio" id="New" placeholder />Marla <br/>
                      <input className="catagoryInput"  type="radio" id="Used" placeholder />Squre Feet <br />
                      <input className="catagoryInput"  type="radio" id="Used" placeholder />Squre Meeter <br />
                      <input className="catagoryInput"  type="radio" id="Used" placeholder />Squre Yard <br />
                     
                      <h4 className="Catagory siz18">AREA</h4>
                   <div className="li">
                      <input className="catagoryInput1" type="text" id="min" placeholder="min" /> 
                      <input className="catagoryInput1" type="text" id="max" placeholder="max" /> 
                      <button>&#62;</button>
                   </div>

                 <h4 className="Catagory siz18">FURNISHED</h4>
                      <input className="catagoryInput"  type="radio" id="Used" placeholder />NO <br />
                      <input className="catagoryInput" type="radio" id="New" placeholder />YES

                      <h4 className="Catagory siz18">BETHROOMS</h4>
                   <div className="li">
                      <input className="catagoryInput1" type="text" id="min" placeholder="min" /> 
                      <input className="catagoryInput1" type="text" id="max" placeholder="max" /> 
                      <button>&#62;</button>
                   </div>
         
              </div>
             </div>
            </div>
        );
    }
}
class TvVideoAudio extends Component {
    render() {
        return (
            <div>
                <div className="filterdiv">
              <h4 className="siz18">Filter</h4>
                  <div className="inerdiv">
                      
                 <h4 className="Catagory siz18">CATEGORIES</h4>
                    <div className="li"> <Link to="/">All categories</Link> <br/>
                     <Link to="/">Electronics & Home Appliences</Link> <br/>
                     <Link to="/">Computer & Accessories</Link> <br/>
                     <Link to="/">Camera & Accessories</Link> <br/>
                     <Link to="/">Other Home Appliance</Link> <br/>
                     <Link to="/">Kerchen Appliance</Link> <br/>
                     <Link to="/">Ac & coolers</Link> <br/>
                     <Link to="/">Fridges</Link> <br/>
                     <Link to="/">Washing Machine</Link> <br/>



                     </div>
                       
                 <h4 className="Catagory siz18">locations</h4>
                 <div className="li">
                     <Link to="/">Pakistan</Link> <br/>
                     <Link to="/">Sindh</Link> <br/>
                     <Link to="/">Panjab</Link> <br/>
                     <Link to="/">Khyber Paktunkhwa</Link> <br/>
                     <Link to="/">islamabad Capital Territory</Link> <br/>
                     <Link to="/">Blochistan</Link>
                  </div>
                 <h4 className="Catagory siz18">Make</h4>
                 <div className="li">
                     <Link to="/">Samsung</Link> <br/>
                     <Link to="/">Apple</Link> <br/>
                     <Link to="/">Huawei</Link> <br/>
                     <Link to="/">Oppo</Link> <br/>
                     <Link to="/">vIVO</Link> <br/>
                     </div>
            
         
                 <h4 className="Catagory siz18">PRICE</h4>
                  <div className="li">
                      <input className="catagoryInput1" type="text" id="min" placeholder="min" /> 
                      <input className="catagoryInput1" type="text" id="max" placeholder="max" /> 
                      <button>&#62;</button>
                  </div>
                 <h4 className="Catagory siz18">CONDITION</h4>
                      <input className="catagoryInput"  type="checkbox" id="Used" placeholder />used <br />
                      <input className="catagoryInput" type="checkbox" id="New" placeholder />New
         
              </div>
             </div>
            </div>
        );
    }
}
class Tablets extends Component {
    render() {
        return (
            <div>
                <div className="filterdiv">
              <h4 className="siz18">Filter</h4>
                  <div className="inerdiv">
                      
                 <h4 className="Catagory siz18">CATEGORIES</h4>
                    <div className="li"> <Link to="/">All categories</Link> <br/>
                     <Link to="/">Mobiles</Link> <br/>
                     <Link to="/">Tablests</Link> <br/>
                     <Link to="/">Accessories</Link> <br/>
                     </div>
                       
                 <h4 className="Catagory siz18">locations</h4>
                 <div className="li">
                     <Link to="/">Pakistan</Link> <br/>
                     <Link to="/">Sindh</Link> <br/>
                     <Link to="/">Panjab</Link> <br/>
                     <Link to="/">Khyber Paktunkhwa</Link> <br/>
                     <Link to="/">islamabad Capital Territory</Link> <br/>
                     <Link to="/">Blochistan</Link>
                  </div>
                 <h4 className="Catagory siz18">Make</h4>
                 <div className="li">
                     <Link to="/">Samsung</Link> <br/>
                     <Link to="/">Apple</Link> <br/>
                     <Link to="/">Huawei</Link> <br/>
                     <Link to="/">Oppo</Link> <br/>
                     <Link to="/">vIVO</Link> <br/>
                     </div>
            
         
                 <h4 className="Catagory siz18">PRICE</h4>
                  <div className="li">
                      <input className="catagoryInput1" type="text" id="min" placeholder="min" /> 
                      <input className="catagoryInput1" type="text" id="max" placeholder="max" /> 
                      <button>&#62;</button>
                  </div>
                 <h4 className="Catagory siz18">CONDITION</h4>
                      <input className="catagoryInput"  type="checkbox" id="Used" placeholder />used <br />
                      <input className="catagoryInput" type="checkbox" id="New" placeholder />New
         
              </div>
             </div>
            </div>
        );
    }
}

class LandPlot extends Component {
    render() {
        return (
            <div>
                <div className="filterdiv">
              <h4 className="siz18">Filter</h4>
                  <div className="inerdiv">
                      
                 <h4 className="Catagory siz18">CATEGORIES</h4>
                    <div className="li"> <Link to="/">All categories</Link> <br/>
                     <Link to="/">Property for sale</Link> <br/>
                     <Link to="/">Land & Plots</Link> <br/>
                     <Link to="/">hpuses</Link> <br/>
                     <Link to="/">Apartment</Link> <br/>
                     <Link to="/">Shops - Offices - Commircial Space</Link> <br/>
                     <Link to="/">Portions & Flors</Link> <br/>
                    
                     </div>
                       
                 <h4 className="Catagory siz18">locations</h4>
                 <div className="li">
                     <Link to="/">Pakistan</Link> <br/>
                     <Link to="/">Sindh</Link> <br/>
                     <Link to="/">Panjab</Link> <br/>
                     <Link to="/">Khyber Paktunkhwa</Link> <br/>
                     <Link to="/">islamabad Capital Territory</Link> <br/>
                     <Link to="/">Blochistan</Link>
                  </div>
                 
                 <h4 className="Catagory siz18">PRICE</h4>
                  <div className="li">
                      <input className="catagoryInput1" type="text" id="min" placeholder="min" /> 
                      <input className="catagoryInput1" type="text" id="max" placeholder="max" /> 
                      <button>&#62;</button>
                  </div>

                  <h4 className="Catagory siz18">BEDROOMS</h4>
                   <div className="li">
                      <input className="catagoryInput1" type="text" id="min" placeholder="min" /> 
                      <input className="catagoryInput1" type="text" id="max" placeholder="max" /> 
                      <button>&#62;</button>
                   </div>
                   
                   <h4 className="Catagory siz18">Area Unit</h4>
                      <input className="catagoryInput"  type="radio" id="Used" placeholder />Kanal <br />
                      <input className="catagoryInput" type="radio" id="New" placeholder />Marla <br/>
                      <input className="catagoryInput"  type="radio" id="Used" placeholder />Squre Feet <br />
                      <input className="catagoryInput"  type="radio" id="Used" placeholder />Squre Meeter <br />
                      <input className="catagoryInput"  type="radio" id="Used" placeholder />Squre Yard <br />
                     
                      <h4 className="Catagory siz18">AREA</h4>
                   <div className="li">
                      <input className="catagoryInput1" type="text" id="min" placeholder="min" /> 
                      <input className="catagoryInput1" type="text" id="max" placeholder="max" /> 
                      <button>&#62;</button>
                   </div>

                 <h4 className="Catagory siz18">FURNISHED</h4>
                      <input className="catagoryInput"  type="radio" id="Used" placeholder />NO <br />
                      <input className="catagoryInput" type="radio" id="New" placeholder />YES

                      <h4 className="Catagory siz18">BETHROOMS</h4>
                   <div className="li">
                      <input className="catagoryInput1" type="text" id="min" placeholder="min" /> 
                      <input className="catagoryInput1" type="text" id="max" placeholder="max" /> 
                      <button>&#62;</button>
                   </div>
         
              </div>
             </div>
            </div>
        );
    }
}

export  { Mobiles,Cars, Motorcyclea, Houses,TvVideoAudio  , Tablets, LandPlot };