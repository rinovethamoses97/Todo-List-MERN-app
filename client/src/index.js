import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from "./components/about";
import Login from "./components/login";
import Registration from "./components/registration";
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
ReactDOM.render(<Router><Route exact path="/" component={App}/><Route exact path="/about" component={About}></Route>
<Route exact path="/login" component={Login}></Route>
<Route exact path="/signup" component={Registration}></Route>
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
