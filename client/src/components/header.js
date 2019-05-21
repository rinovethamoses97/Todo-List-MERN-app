import React,{Component} from 'react';
class header extends Component{
    constructor(){
        super();
        this.state={};
    }
    render(){
        return(
            <div>
                <h1>Todo List App</h1>
                <a href="/about">About</a><br></br>
                <a href="/login">Login</a>
            </div>
        );
    }
}
export default header;