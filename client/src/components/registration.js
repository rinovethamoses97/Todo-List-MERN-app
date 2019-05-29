import React,{Component} from "react";
import Todo from "./Todo";
import axios from "axios";
import cookie from "react-cookies";
class Registration extends Component{
    constructor(){
        super();
        this.state={username:"",password:"",repassword:"",error:null,login:false}
    }
    handleUsernameChange=(event)=>{
        this.setState({username:event.target.value});
    }
    handlePasswordChange=(event)=>{
        this.setState({password:event.target.value});
    }
    handlerePasswordChange=(event)=>{
        this.setState({repassword:event.target.value});
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state);
        if(this.state.password!==this.state.repassword){
            this.setState({error:"Passwords Does not match"});
        }
        else{
            this.setState({error:null});
            axios.post("http://localhost:3001/addUser",{username:this.state.username,password:this.state.password}).then((response)=>{
                if(response.data.status==="success"){
                    alert("User Registered");
                    this.setState({login:true});
                    cookie.save("username",this.state.username,{path:"/"});
                }
                else{
                    console.log("Error");
                }
            });
        }
    }
    render(){
        var errorMessage=this.state.error?(<span style={{color:"red"}} className="error-message">{this.state.error}</span>):null;
        if(this.state.login){
            return(<div className="container"><Todo username={this.state.username}/></div>);
        }
        else{
            return(
                <div className="container">
                <form onSubmit={this.handleSubmit}>
                {errorMessage}
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                    id="username"
                    type="text"
                    className="form-control"
                    required
                    value={this.state.username}
                    onChange={this.handleUsernameChange}
                    />
                </div>
    
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                    id="password"
                    className="form-control"
                    type="password"
                    required
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="repassword">Reenter Password:</label>
                    <input
                    id="repassword"
                    className="form-control"
                    type="password"
                    required
                    value={this.state.repassword}
                    onChange={this.handlerePasswordChange}
                    />
                </div>
                
                <input className="btn btn-primary" id="submit" type="submit" value="Signup" />
                </form>
            </div>
        );
        }

    }
}
export default Registration;