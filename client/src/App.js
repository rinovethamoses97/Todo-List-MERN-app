import React,{Component} from 'react';
import Header from "./components/header";
import Todo from "./components/Todo";
class App extends Component{
  render(){
    return (
      <div className="container">
        <Header/>
        <Todo/>
      </div>
    );
  }
}

export default App;
