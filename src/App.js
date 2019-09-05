import React, { Component } from 'react';

import Signin from './components/Signin';
import MainTodo from './components/MainTodo';
import Signup from './components/Signup';
import { Route } from 'react-router-dom';


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Signin}/>
        <Route path='/main-todo' component={MainTodo}/>
        <Route path='/signup' component={Signup}/>
      </div>
    );
  }
}


export default App;
