(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){e.exports=a(64)},64:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(27),o=a.n(r),l=a(3),c=a(4),i=a(7),m=a(5),u=a(6),d=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h1",null,"Todo List App"),s.a.createElement("a",{href:"/about"},"About"),s.a.createElement("br",null),s.a.createElement("a",{href:"/login"},"Login"),s.a.createElement("br",null),s.a.createElement("a",{href:"/signup"},"Signup"),s.a.createElement("br",null))}}]),t}(n.Component),h=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement(d,null))}}]),t}(n.Component),g=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement("p",null,"Developed by Rino"))}}]),t}(n.Component),p=a(11),b=a.n(p),v=a(13),E=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this))).handleChange=function(e){a.setState({content:e.target.value})},a.signout=function(){a.setState({login:!1}),localStorage.setItem("login","false"),localStorage.setItem("username","")},a.deletePost=function(e){var t=e.target.id;b.a.post("/deleteContent",{id:e.target.id}).then(function(e){if("success"===e.data.status){console.log("Todo Deleted");for(var n=a.state.todo,s=0;s<n.length;s++)n[s]._id===t&&(n[s].status=!1);a.setState({todo:n})}else console.log("Error")})},a.state={content:"",todo:[],login:!0,username:e.username},a.componentWillMount=a.componentWillMount.bind(Object(v.a)(a)),a.saveContent=a.saveContent.bind(Object(v.a)(a)),a.handleChange=a.handleChange.bind(Object(v.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){console.log("Getting the todolist from db");var e=this;b.a.post("/getContent",{username:this.state.username}).then(function(t){if("success"===t.data.status){var a=t.data.data;console.log(a);for(var n=0;n<a.length;n++)a[n].status=!0;e.setState({todo:t.data.data})}else alert("Error")})}},{key:"saveContent",value:function(){console.log(this.state.content);var e=this;b.a.post("/addContent",{username:this.state.username,content:this.state.content}).then(function(t){if("success"===t.data.status){alert("Todo added");var a=e.state.todo,n=t.data.data;n.status=!0,a.push(n),e.setState({content:"",todo:a})}else alert("Error")})}},{key:"render",value:function(){var e=this;return this.state.login?s.a.createElement("div",null,s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-12"},"Welcome ",this.state.username)),this.state.todo.map(function(t){if(t.status){var a=new Date(t.timeStamp);return s.a.createElement("div",{className:"row",key:t._id},s.a.createElement("div",{className:"col-sm-12"},s.a.createElement("div",{className:"alert alert-success"},t.content,s.a.createElement("span",{id:t._id,style:{float:"right",cursor:"pointer"},onClick:e.deletePost},"X"),s.a.createElement("br",null),s.a.createElement("span",{style:{fontWeight:"bold",fontStyle:"oblique"}},"Posted on: ",a.getDate(),"-",a.getMonth(),"-",a.getFullYear()))))}return s.a.createElement("div",{className:"row",key:t._id},s.a.createElement("div",{className:"col-sm-12"},s.a.createElement("div",{className:"alert alert-danger",style:{textDecoration:"line-through"}},t.content)))}),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-8"},s.a.createElement("input",{type:"text",className:"form-control",value:this.state.content,placeholder:"Enter the ToDo",onChange:this.handleChange})),s.a.createElement("div",{className:"col-sm-2"},s.a.createElement("button",{className:"btn btn-primary",onClick:this.saveContent},"Post")),s.a.createElement("div",{className:"col-sm-2"},s.a.createElement("button",{className:"btn btn-primary",onClick:this.signout},"Signout")))):s.a.createElement(f,null)}}]),t}(n.Component),f=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).handleUsernameChange=function(t){e.setState({username:t.target.value})},e.handlePasswordChange=function(t){e.setState({password:t.target.value})},e.componentWillMount=function(){null!=localStorage.getItem("login")&&"true"===localStorage.getItem("login")&&e.setState({login:!0,username:localStorage.getItem("username")})},e.handleSubmit=function(t){t.preventDefault(),console.log(e.state),b.a.post("/login",{username:e.state.username,password:e.state.password}).then(function(t){"success"===t.data.status?t.data.login?(console.log("Login Success"),e.setState({error:null,login:!0}),localStorage.setItem("login","true"),localStorage.setItem("username",e.state.username)):(console.log("Login Failed"),e.setState({error:"User Not Exist"}),e.setState({login:!1})):console.log("Error")})},e.state={username:"",password:"",error:null,login:!1},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.error?s.a.createElement("span",{style:{color:"red"},className:"error-message"},this.state.error):null;return this.state.login?s.a.createElement("div",{className:"container"},s.a.createElement(E,{username:this.state.username})):s.a.createElement("div",{className:"container"},s.a.createElement("form",{onSubmit:this.handleSubmit},e,s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"username"},"Username:"),s.a.createElement("input",{id:"username",type:"text",className:"form-control",required:!0,value:this.state.username,onChange:this.handleUsernameChange})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"password"},"Password:"),s.a.createElement("input",{id:"password",className:"form-control",type:"password",required:!0,value:this.state.password,onChange:this.handlePasswordChange})),s.a.createElement("input",{className:"btn btn-primary",id:"submit",type:"submit",value:"Submit"})))}}]),t}(n.Component),w=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).handleUsernameChange=function(t){e.setState({username:t.target.value})},e.handlePasswordChange=function(t){e.setState({password:t.target.value})},e.handlerePasswordChange=function(t){e.setState({repassword:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),console.log(e.state),e.state.password!==e.state.repassword?e.setState({error:"Passwords Does not match"}):(e.setState({error:null}),b.a.post("/addUser",{username:e.state.username,password:e.state.password}).then(function(t){"success"===t.data.status?(alert("User Registered"),e.setState({login:!0}),localStorage.setItem("login","true"),localStorage.setItem("username",e.state.username)):console.log("Error")}))},e.state={username:"",password:"",repassword:"",error:null,login:!1},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.error?s.a.createElement("span",{style:{color:"red"},className:"error-message"},this.state.error):null;return this.state.login?s.a.createElement("div",{className:"container"},s.a.createElement(E,{username:this.state.username})):s.a.createElement("div",{className:"container"},s.a.createElement("form",{onSubmit:this.handleSubmit},e,s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"username"},"Username:"),s.a.createElement("input",{id:"username",type:"text",className:"form-control",required:!0,value:this.state.username,onChange:this.handleUsernameChange})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"password"},"Password:"),s.a.createElement("input",{id:"password",className:"form-control",type:"password",required:!0,value:this.state.password,onChange:this.handlePasswordChange})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"repassword"},"Reenter Password:"),s.a.createElement("input",{id:"repassword",className:"form-control",type:"password",required:!0,value:this.state.repassword,onChange:this.handlerePasswordChange})),s.a.createElement("input",{className:"btn btn-primary",id:"submit",type:"submit",value:"Signup"})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(55);var S=a(28),C=a(12);o.a.render(s.a.createElement(S.a,null,s.a.createElement(C.a,{exact:!0,path:"/",component:h}),s.a.createElement(C.a,{exact:!0,path:"/about",component:g}),s.a.createElement(C.a,{exact:!0,path:"/login",component:f}),s.a.createElement(C.a,{exact:!0,path:"/signup",component:w})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.b55c45cf.chunk.js.map