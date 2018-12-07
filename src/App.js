import React, { Component } from 'react';
import Login from './Components/SignIn.js'
import Calendar from './Components/Calendar/Calendar.js'
import Users from "./Components/Users/Users.js"
import Form from "./Components/Form/Form.js"

import Register from "./Components/Register/Register.js"

import GroupsBoard from "./Components/GroupsBoard/GroupsBoard.js"
import './App.css';
import { Switch, 
         Route,
 //        Link,
         Redirect,
 //        withRouter
       } from 'react-router-dom'


const Auth = {
  isAuthenticated: true,
}

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        Auth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}


class App extends Component {
constructor(){
    super();
    this.state = {
      isSignedIn: Auth.isAuthenticated,
      user:{
          id:'1',
          name:'Cris',
          email:'cris@email.com',
      }
    }
  }


loadUser = (data) => {
  this.setState({user:{
          id: data.id,
          name:data.user_name,
          email:data.email,
  }})
  console.log(data);
} 

authenticate = (e) =>{
  Auth.isAuthenticated = e

}


  render() {  
    return (
      <div className="App">
      
      <Switch>
        <Route exact path='/' component={() => <Login loadUser ={this.loadUser} authenticate={this.authenticate}/>}/>
        <Route path = '/Register' component ={() => <Register loadUser ={this.loadUser} authenticate={this.authenticate}/>}/>
        <PrivateRoute exact path='/Form' component ={() => <Form user ={this.state.user}/>}/>
        <PrivateRoute path='/Calendar' component ={() => <Calendar user ={this.state.user}/>}/>
        <PrivateRoute path='/Users' component ={() => <Users user ={this.state.user}/>}/>
        <PrivateRoute path='/Groups' component ={() => <GroupsBoard user ={this.state.user}/>}/>
      </Switch>
          
      </div>
    );
  }
}


export default App;
