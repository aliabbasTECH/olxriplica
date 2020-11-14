import React from 'react';
import { connect } from 'react-redux';
import { facebook_login} from  '../../store/action';
import {Link} from "react-router-dom";

class Chatindex extends React.Component {
    
    render() {
        // let user ={name:"ali", email:"aliabbas@gmail.com" }
        
        return (
            <div>
            <Link to="/chat">chat</Link><button onClick={() => this.props.facebook_login(this.props.history)}> Facebook login</button>
        </div>
 
        );
    }
}

const mapStateToProps = (state)=> ({
    users  :state.users
})

const mapDispatchToProps = (dispatch) => ({
   
    facebook_login: (history) => dispatch(facebook_login(history))
})

export default connect(mapStateToProps, mapDispatchToProps) (Chatindex);