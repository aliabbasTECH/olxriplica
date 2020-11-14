import React from 'react';
import {Link} from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import logo from '../images/logoolx.png';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import RivewDetails from '../component/rivewyourdetails'

class Attr extends React.Component {

    constructor(props){  
        super(props);  
        this.state = {  
            name:"",
            phonenumber:"",
             Codition: [] ,
             type:[],
             title:'',
             description:"",
             price:"",
             location:"",
             image:[],
         }  
      }

    render() {
        return (
            <div>
                
                <div className="postheader flex aCenter">
                 <div className="backbutn"><button className="barro"><ArrowBackIcon style={{ fontSize: 25 }}  /></button></div>
                 <div className="logopost"><Link to="/"><img src={logo} alt="" width={48} /></Link></div>
                </div>
                

                <div className="container pcon">
                   <h2 className="htitle  tCenter">POST YOUR AD</h2>
                   <div className="incont ">
                      <h4 className="chooseC siz18 b">SELECTED  CATEGORY</h4>
                      <div className=" select_change flex"> <p className="selected_cat"> Mobiles/Tables </p> <p className="change">Change</p> </div>
                    <div className="adform_out_container">
                        <div className="adform">
                         <h3 className="siz20">INCLUDE SOME DETAILS</h3>
                        
                        
                         <form> 
                             <div className="condition flex">
                                 <div className="iner_condition"> 
                                  <label htmlFor="Condition ">Condition*</label><br />
                                  <button className="Cbuton" type="button" id="New" name="Condition"  >New </button> 
                                  <button className="Cbuton" type="button" id="Used" name="Condition"  >Used </button> 
                                  </div>
                              
                            </div>
                            <div className="Type flex">
                                 <div className="iner_Type"> 
                                  <label htmlFor="Type ">Type*</label><br />
                                     <input className="Cbuton" type="button" id="Apple" name="Type" defaultValue="Apple" />
                                     <input className="Cbuton" type="button" id="Danny" name="Type" defaultValue="Dany" />
                                     <input className="Cbuton" type="button" id="Q-tab" name="Type" defaultValue="Qtab" />
                                     <input className="Cbuton" type="button" id="Samsung" name="Type" defaultValue="Samsung" />
                                     <input className="Cbuton" type="button" id="Samsung" name="Type" defaultValue="Samsung" />
                                 </div>
                              
                            </div>

                            <br /><br />

                            <div className="input_textArea">
                            <label htmlFor="Adtitle">Title*</label><br></br>
                             <input type="text" id="Adtitle" name="Adtitle"  className="inoutArea" /><br /><br />
                            <label htmlFor="Adtitle"> Discription </label><br/>
                            <textarea autoComplete="off" data-aut-id id="description" 
                            className="textArea" maxLength={4096} name="description" 
                            placeholder  defaultValue={""} />
                            </div>
                            
                            <div className="price">
                               
                                <label htmlFor="Adtitle">price*</label><br></br>
                                <div className="inprice flex">
                                    <p >Rs</p> <input type="text" id="Adtitle" name="Adtitle"  className="ip" />
                                </div>
                            </div>
                            

                            <div className="uploads_images">
                                <h2 className="uptitle siz120"> UPOLOAD UP TO 12 PHOTOS</h2>

                                <div className="upload_img_container">
                                    <div className="up_im_co flex ">
                                        <div  classname="imgbox" >
                                             <label  for="file-upload" class="custom-file-upload"><AddAPhotoIcon/> <br/>Add photo </label>
                                             <input  id="file-upload" name='upload_cont_img' type="file" style={{display:"none"}}/>
                                         </div>

                                         <div classname="imgbox">
                                             <label  for="file-upload" class="custom-file-upload  "><AddAPhotoIcon/> <br/>Add photo </label>
                                             <input   id="file-upload" name='upload_cont_img' type="file" style={{display:"none"}}/>
                                         </div>

                                         <div classname="imgbox">
                                             <label for="file-upload" class="custom-file-upload"><AddAPhotoIcon/> <br/>Add photo  </label>
                                             <input  id="file-upload" name='upload_cont_img' type="file" style={{display:"none"}}/>
                                         </div>

                                         <div classname="imgbox">
                                             <label for="file-upload" class="custom-file-upload"><AddAPhotoIcon/> <br/>Add photo </label>
                                             <input  id="file-upload" name='upload_cont_img' type="file" style={{display:"none"}}/>
                                         </div>
                                        
                                         <div classname="imgbox">
                                             <label for="file-upload" class="custom-file-upload"><AddAPhotoIcon/> <br/>Add photo </label>
                                             <input  id="file-upload" name='upload_cont_img' type="file" style={{display:"none"}}/>
                                         </div>

                                         <div classname="imgbox">
                                             <label for="file-upload" class="custom-file-upload"><AddAPhotoIcon/> <br/>Add photo </label>
                                             <input  id="file-upload" name='upload_cont_img' type="file" style={{display:"none"}}/>
                                         </div>

                                         <div classname="imgbox">
                                             <label for="file-upload" class="custom-file-upload"><AddAPhotoIcon/> <br/>Add photo  </label>
                                             <input  id="file-upload" name='upload_cont_img' type="file" style={{display:"none"}}/>
                                         </div>

                                         <div classname="imgbox">
                                             <label for="file-upload" class="custom-file-upload"><AddAPhotoIcon/> <br/>Add photo </label>
                                             <input  id="file-upload" name='upload_cont_img' type="file" style={{display:"none"}}/>
                                         </div>
                                    
                                         <div classname="imgbox">
                                             <label for="file-upload" class="custom-file-upload"><AddAPhotoIcon/> <br/>Add photo </label>
                                             <input  id="file-upload" name='upload_cont_img' type="file" style={{display:"none"}}/>
                                         </div>


                                         <div classname="imgbox">
                                             <label for="file-upload" class="custom-file-upload"><AddAPhotoIcon/> <br/>Add photo </label>
                                             <input  id="file-upload" name='upload_cont_img' type="file" style={{display:"none"}}/>
                                         </div>


                                         <div classname="imgbox">
                                             <label for="file-upload" class="custom-file-upload"><AddAPhotoIcon/> <br/>Add photo </label>
                                             <input  id="file-upload" name='upload_cont_img' type="file" style={{display:"none"}}/>
                                         </div>


                                         <div classname="imgbox">
                                             <label for="file-upload" class="custom-file-upload"><AddAPhotoIcon/> <br/>Add photo </label>
                                             <input  id="file-upload" name='upload_cont_img' type="file" style={{display:"none"}}/>
                                         </div>
                                    
                                    </div>
                                    
                                </div>
 
                            </div>

                            <div className="yourlocations">
                                <h3 className="location_heading ">CONFORM YOUR LOCATION</h3>
                                <div className="location_container">
                                     <button className="locationlist" >
                                          List
                                     </button>
                                     <button className="locationCurrent" >
                                          Current Location
                                     </button>
                                     <br/>
                                     
                                     <label htmlFor="State">State*</label><br></br>
                                     <select id="State" name="State" class="rui-1ekfu rui-98Wif" data-aut-id="dd-state">
                                         <option value="2003000">Azad Kashmir</option>
                                         <option value="2003001">Balochistan</option>
                                         <option value="2003003">Islamabad Capital Territory</option>
                                         <option value="2003005">Khyber Pakhtunkhwa</option>
                                         <option value="2003004">Northern Areas</option>
                                         <option value="2003006">Punjab</option>
                                         <option value="2003007">Sindh</option>
                                    </select>
                                </div>
                            </div>

                            <div className="yourdetails">
                                <h3 className="dstail_heading">REVIEW YOUR DETAILS</h3>
                                <div className="profile_name_img">
                                     <div className="profile_img">
                                     </div>
                                     <label htmlFor="Adtitle">name</label><br></br>
                                     <input type="text" id="Adtitle" name="Adtitle"  className="your_detail_name" />
                                </div>
                               <RivewDetails/>



                            </div>
                         </form>
                         

                         </div>
                    </div>


                </div>
                </div>


            </div>
        );
    }
}

export default Attr;