import React, { Component } from 'react';

class Rivewdetails extends Component {
    render() {
        return (
            
                <div className="yourdetails">
                                <h3 className="dstail_heading">REVIEW YOUR DETAILS</h3>
                                <div className="profile_name_img">
                                     <img src="" className="profile_img" alt=""/>
                                     <label htmlFor="Adtitle">name</label><br></br>
                                     <input type="text" id="Adtitle" name="Adtitle"  className="your_detail_name" />
                                </div>
                </div>
        );
        } 
}


export default Rivewdetails;