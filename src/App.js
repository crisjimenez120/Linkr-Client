import React, { Component } from 'react';
import SignIn from './Components/SignIn.js'
import Calendar from './Components/Calendar/Calendar.js'
import Users from "./Components/Users/Users.js"
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
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
      </Switch>
          
      </div>
    );
  }
}


export default App;
