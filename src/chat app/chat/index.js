import { RotateRightSharp } from '@material-ui/icons';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { get_users } from '../../store/action/index'



class Chat extends React.Component {

    constructor(){
        super()
        this.state={
            chat_user:{},
            chats:[],
            message:"",
        }

    }
    chat=(user)=>{
        this.setState({
            chat_user:user
        })
    }

   
    componentDidMount(){
    this.props.get_users()
}
send_message=()=>{
    let user = this.props.current_user;
    let chat_user = this.props.chat_user;
    this.state.chats.push({
        message:this.state.message
    })
    this.setState({
        chats:this.state.chats,
        message:""
    })
}
    render() {
        let user = this.props.current_user;

        console.log("firebase users==>", this.props.users)
        return (
            
            <div>
                <h4>welcome! {user.name}</h4>,
                <img src={user.profile} aly=""/>
                <h6>email:{user.email}</h6>
                 <div>
                     <div>
                         <h4>chat users:</h4>
                         {this.props.users.map((v,i)=>{
                             return v.uid !== user.uid && <li key={i}> <img src={v.profile}  alt="" width="15"/>  {v.name} <button onClick={()=>this.chat(v)}>chat</button></li>
                            
                         })}
                     </div>
                     <div>
                         <h4>chat</h4>
                         {Object.keys(this.state.chat_user).length ?
                          <div>
                          <h5><img src={this.state.chat_user.profile}  alt="" width="15"/>{ this.state.chat_user.name} </h5>
                          
                           <ul>
                            {this.state.chats.map((v,i)=>{
                              return <li key={i}>{v.message}</li>
                            })}
                          </ul>

                          <input value={this.state.message} onChange={(e)=> this.setState({ message: e.target.value })} type="text" placeholder="enter massage" />
                          <button onClick={()=>this.send_message()}>send</button>
                          </div>
                          :
                          <h4>no user</h4>
                          
                          }
                 </div>
                     </div>
            </div>
           
        );
    }
}
const mapStateToProps = (state)=> ({
    current_user:state.current_user,
    users: state.users
})

const mapDispatchToProps = (dispatch) => ({
   get_users: () => dispatch(get_users())
})

export default connect(mapStateToProps, mapDispatchToProps) (Chat);