import React, { Component } from 'react';
import SignIn from './Components/SignIn.js'
import Calendar from './Components/Calendar/Calendar.js'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Nav from './Components/MaterialUI/Nav.js';

import './App.css';

class App extends Component {
  state = {
    visible : false
  }

  makeVisible = () =>{
    this.setState({
      visible : !this.state.visible
    })
  }
  
  render() {
    const buttonText = this.state.visible ? "LOG ME TF IN" : "LOG ME TF OUT"
  
    return (
      <div className="App">
      <Nav/>
      {this.state.visible ? <SignIn/> : <Calendar/>}
        <Button onClick ={this.makeVisible} variant="outlined" size="small" color="primary" > {buttonText} </Button>
      </div>
    );
  }
}


export default App;
