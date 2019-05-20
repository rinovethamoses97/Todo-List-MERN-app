import React,{Component} from 'react';
import axios from "axios";
class Todo extends Component{
  constructor(){
    super();
    this.state={content:"",todo:[]};
    this.componentWillMount=this.componentWillMount.bind(this);
    this.saveContent=this.saveContent.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }
  componentWillMount(){
     console.log("Getting the todolist from db");
     var self=this;
     axios.post("http://localhost:3001/getContent").then(function(response){
      if(response.data.status==="success"){
        var temp=response.data.data;
        for(var i=0;i<temp.length;i++){
          temp[i].status=true;
        }
        self.setState({todo:response.data.data});
      }
      else{
        alert("Error");
      }
     });
  }
  saveContent(){
    console.log(this.state.content);
    var self=this;
    axios.post("http://localhost:3001/addContent",{content:this.state.content}).then(function(response){
        if(response.data.status==="success"){
          alert("Todo added");
          var temp=self.state.todo;
          var newPost=response.data.data;
          newPost.status=true;
          temp.push(newPost);
          self.setState({content:'',todo:temp});
        }
        else{
          alert("Error");
        }
    });
  };
  handleChange=(event)=>{
    this.setState({content:event.target.value});
  }
  deletePost=(event)=>{
    var targetId=event.target.id;
    axios.post("http://localhost:3001/deleteContent",{id:event.target.id}).then((response)=>{
        if(response.data.status==="success"){
          console.log("Todo Deleted");
          var temp=this.state.todo;
          for(var i=0;i<temp.length;i++){
            if(temp[i]._id===targetId){
              temp[i].status=false;
            }
          }
          this.setState({todo:temp});
        }
        else{
          console.log("Error");
        }
    })
  }
  render(){
    return (
      <div>
        {
          this.state.todo.map((todo)=>{
            if(todo.status){
              var postDate=new Date(todo.timeStamp);  
              return <div className="row" key={todo._id}>
                    <div className="col-sm-12">
                      <div className="alert alert-success">
                        {todo.content}
                        <span id={todo._id} style={{float:'right',cursor:'pointer'}} onClick={this.deletePost}>X</span><br></br>
                        <span style={{fontWeight:"bold",fontStyle:"oblique"}}>Posted on: {postDate.getDate()}-{postDate.getMonth()}-{postDate.getFullYear()}</span>
                      </div>
                    </div>
                  </div>
            }
            else{
              return <div className="row" key={todo._id}>
                    <div className="col-sm-12">
                      <div className="alert alert-danger" style={{textDecoration:"line-through"}}>
                        {todo.content}
                        {/* <span id={todo._id} style={{float:'right',cursor:'pointer'}} onClick={this.deletePost}>X</span> */}
                      </div>
                    </div>
                  </div>
            }
          })
        }
        <div className="row">
          <div className="col-sm-10">
            <input type="text" className="form-control" value={this.state.content}  placeholder="Enter the ToDo" onChange={this.handleChange}></input>
          </div>
          <div className="col-sm-2">
            <button className="btn btn-primary" onClick={this.saveContent}>Post</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
