import React,{Component} from "react";
class Login extends Component{
    constructor(){
        super();
        this.state={username:"",password:"",error:null}
    }
    handleUsernameChange=(event)=>{
        this.setState({username:event.target.value});
    }
    handlePasswordChange=(event)=>{
        this.setState({password:event.target.value});
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state);
    }
    render(){
        var errorMessage=this.state.error?(<span className="error-message">{this.state.error}</span>):null;
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit}>
            {errorMessage}
            <div className="form-element">
                <label>Username:</label>
                <input
                id="username"
                type="text"
                required
                value={this.state.username}
                onChange={this.handleUsernameChange}
                />
            </div>

            <div className="form-element">
                <label>Password:</label>
                <input
                id="password"
                type="password"
                required
                value={this.state.password}
                onChange={this.handlePasswordChange}
                />
            </div>
            <input id="submit" type="submit" value="Submit" />
            </form>
        </div>
        );
    }
}
export default Login;