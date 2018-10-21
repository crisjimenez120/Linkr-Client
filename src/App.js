import React, { Component } from 'react';
import SignIn from './Components/SignIn.js'
import Calendar from './Components/Calendar/Calendar.js'

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

      {this.state.visible ? <SignIn/> : <Calendar/>} 
      <button onClick ={this.makeVisible}> {buttonText} </button>
        
      </div>
    );
  }
}


export default App;
