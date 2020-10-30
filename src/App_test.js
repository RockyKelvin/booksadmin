import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';
function Nomatch(){
  return <div>
    <h1>
      没有相关路径
    </h1>
  </div>
}
function App() {
  return (
    <div className="App">
          <h1>Hello World</h1>
          <Router>
             <Link to="/">首页</Link>
             <span> | </span>
             <Link to="/login">登陆</Link>
             <span> | </span>
             <Link to="/register">注册</Link>
             <Switch>
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
              <Route path="/:id" exact component={Home} />
              <Route component={Nomatch} />
             </Switch>
          </Router>
          
    </div>
  );
}

export default App;
