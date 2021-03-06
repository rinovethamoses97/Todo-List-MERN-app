import React,{Component} from "react";
import axios from "axios";
import Todo from "./Todo";
import cookie from "react-cookies";
class Login extends Component{
    constructor(){
        super();
        this.state={username:"",password:"",error:null,login:false}
    }
    handleUsernameChange=(event)=>{
        this.setState({username:event.target.value});
    }
    handlePasswordChange=(event)=>{
        this.setState({password:event.target.value});
    }
    componentWillMount=()=>{
        if(cookie.load("username")!==undefined){
            this.setState({login:true,username:cookie.load("username")});
        }
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state);
        axios.post("http://localhost:3001/login",{username:this.state.username,password:this.state.password}).then((response)=>{
            if(response.data.status==="success"){
                if(response.data.login){
                    console.log("Login Success");
                    this.setState({error:null,login:true});
                    cookie.save("username",this.state.username,{path:"/"});
                }
                else{
                    console.log("Login Failed");
                    this.setState({error:"User Not Exist"});
                    this.setState({login:false});
                }
            }
            else{
                console.log("Error");
            }
        })
    }
    render(){
        var errorMessage=this.state.error?(<span style={{color:"red"}} className="error-message">{this.state.error}</span>):null;
        if(this.state.login){
            return(
                <div className="container"><Todo username={this.state.username}/></div>
            );
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
                    autoComplete="on"
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
                    autoComplete="on"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                    />
                </div>
                <input className="btn btn-primary" id="submit" type="submit" value="Submit" />
                </form>
            </div>
            );
        }
    }
}
export default Login;