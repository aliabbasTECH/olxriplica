import React, {  useEffect, useState } from 'react';
import {Link} from "react-router-dom";

class AddItem extends React.Component {
   
    render() {   
        // if('placeholder' in this.props){
           return(
            <div className=" ad-items ">
                <div className="poster  placeholder"> <img  src={this.props.image} alt=""/> </div>
           <div className="title  placeholder">{this.props.title}</div>
           <div className="tagline  placeholder">{this.props.tagline}</div>
                <div className="ftr flex ">
           <div className="location ta_r placeholder">{this.props.location}</div>
           <div className=" aleft date siz12 ">{this.props.date}</div>
                </div>

            </div>
           ) 
        }
    //     return(
    //         <div className=" Ad-item ">
    //         </div>
    //        ) 
    // }
}

export default AddItem;