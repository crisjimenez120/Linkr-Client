import React, { Component } from 'react';
import SignIn from './Components/SignIn.js'
import Calendar from './Components/Calendar/Calendar.js'
import Users from "./Components/Users/Users.js"
import Form from "./Components/Modal/Form.js"
import Register from "./Components/Register/Register.js"

import GroupsBoard from "./Components/GroupsBoard/GroupsBoard.js"
import './App.css';
import { Switch, Route } from 'react-router-dom'







class App extends Component { 
  render() {  
    return (
      <div className="App">
      
      <Switch>
        <Route exact path='/' component={SignIn}/>
        <Route path = '/Register' component ={Register}/>
        <Route exact path='/Form' component={Form}/>
        <Route path='/Calendar' component={Calendar}/>
        <Route path='/Users' component={Users}/>
        <Route path='/Groups' component={GroupsBoard}/>
      </Switch>
          
      </div>
    );
  }
}


export default App;
