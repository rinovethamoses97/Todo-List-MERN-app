import React,{Component} from 'react';
class header extends Component{
    constructor(){
        super();
        this.state={};
    }
    render(){
        return(
            <div>
                <h1>Todo List</h1>
                <a href="/about">About</a>
            </div>
        );
    }
}
export default header;