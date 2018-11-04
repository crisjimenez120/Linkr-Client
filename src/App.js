import React, { Component } from 'react';
import Shit from './Components/SignIn.js'
import Calendar from './Components/Calendar/Calendar.js'
import Users from "./Components/Users/Users.js"
import GroupsBoard from "./Components/GroupsBoard/GroupsBoard.js"
import './App.css';
import { Switch, Route } from 'react-router-dom'








class App extends Component { 
  render() {  
    return (
      <div className="App">
      
      <Switch>
        <Route exact path='/' component={Shit}/>
        <Route path='/Calendar' component={Calendar}/>
        <Route path='/Users' component={Users}/>
        <Route path='/Groups' component={GroupsBoard}/>
      </Switch>
          
      </div>
    );
  }
}


export default App;
