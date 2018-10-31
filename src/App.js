import React, { Component } from 'react';
import SignIn from './Components/SignIn.js'
import Calendar from './Components/Calendar/Calendar.js'
import Users from "./Components/Users/Users.js"
import GroupsBoard from "./Components/GroupsBoard/GroupsBoard.js"
import Nav from './Components/MaterialUI/Nav.js';
import './App.css';
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  
  
  render() {  
    return (
      <div className="App">
      <Nav/>
      <Switch>
        <Route exact path='/' component={SignIn}/>
        <Route path='/Calendar' component={Calendar}/>
        <Route path='/Users' component={Users}/>
        <Route path='/Groups' component={GroupsBoard}/>
      </Switch>
          
      </div>
    );
  }
}


export default App;
