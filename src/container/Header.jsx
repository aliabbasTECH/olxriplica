import React from "react";
import {Link} from "react-router-dom";
// icons import from matrial ui
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
// import { LocalPostOffice } from "@material-ui/icons";
import logo from '../images/logoolx.png';
import { connect } from 'react-redux';
import { facebook_login} from  '../store/action/index';
// icons import from matrial ui
class Header extends React.Component {
    render() {
        
        

        return (
            <React.Fragment>
          
            <div className="header fixed flex aCenter">

                <div className="logo">
                <Link to="/"><img src={logo} alt="" width={48} /></Link>
                </div>
                <div className="locations rel flex aCenter">
                    <div className="icon-search ico " /><SearchIcon  style={{ fontSize: 24 }} />
                    <input className="label siz15 font"  placeholder="Your location" value="Pakistan"    />
                    <button className="ExpandMoreIcon  arro of  "  ><ExpandMoreIcon style={{ fontSize: 25 }} /></button>
                </div>
                <div className="search flex aCenter">
                    <input className="query font siz15" type="text" placeholder="find Cars, Mobile Phones and More..."  />
                    <button className="icon-Search go of " > <SearchIcon style={{ fontSize: 24 }} className="cfff" /> </button>
                </div>

                <div className="actions flex aCenter">
                <Link  to="/" className="fonto siz16 a noulh uline " onClick={() => this.props.facebook_login()} >login </Link>
                  {/* <Link to="/post" > */}
                      <button  className="sell flex aCenter of " onClick={() => this.props.facebook_login()} >
                         <div className="icon-plus ico"><AddIcon style={{fontSize:24} } /> </div>
                          <h2 className=" siz15 fonto  "  > SELL</h2>
                       </button> 
                       
                  {/* </Link> */}
                </div>
                
            </div>
            {/* nav sub header */}
            <div className="hnav  flex aCenter">
                <button className="view-cates flex aCenter ">
                  <h2 className="siz18 font"> All CATEGORIES</h2>
                  <button className="ExpandMoreIcon  arro of  "  ><ExpandMoreIcon style={{ fontSize: 25 }} /></button>
                </button>
                 
                             <Link  to="/MobilePhone"  className="noul noulh color fount s15"> Mobile Phones </Link> 
                             <Link  to="/Cars"  className="noul noulh color fount s15"> Cars </Link> 
                             <Link  to="/MotorCycles"  className="noul noulh color fount s15">   MotorCycles </Link> 
                             <Link  to="/House"  className="noul noulh color fount s15"> House  </Link> 
                             <Link  to="/TvVideoAudio"  className="noul noulh color fount s15"> TV-video-Audio  </Link> 
                             <Link  to="/Tablets"  className="noul noulh color fount s15"> Tablets  </Link> 
                             <Link  to="/LandAndplots"  className="noul noulh color fount s15">  Land/plots   </Link> 

            </div>
            {/* <div className="hclr"></div> */}
              
            </React.Fragment>
        )
                }
    }


    const mapStateToProps = (state)=> ({
        users  :state.users
    })
    
    const mapDispatchToProps = (dispatch) => ({
       
        facebook_login: () => dispatch(facebook_login()),

    })
    
    export default connect(mapStateToProps, mapDispatchToProps) (Header);