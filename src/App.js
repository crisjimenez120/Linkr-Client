import React, { Component } from 'react';
import Login from './Components/SignIn.js'
import Calendar from './Components/Calendar/Calendar.js'
import Users from "./Components/Users/Users.js"
import Form from "./Components/Modal/Form.js"
import Register from "./Components/Register/Register.js"

import GroupsBoard from "./Components/GroupsBoard/GroupsBoard.js"
import './App.css';
import { Switch, 
         Route,
         Link,
         Redirect,
         withRouter} from 'react-router-dom'


const Auth = {
  isAuthenticated: false,
  // authenticate(email, password, cb) {
  //   // make a POST request to the backend
  //   fetch('/auth/login', {
  //     method: "POST", // *GET, POST, PUT, DELETE, etc.
  //     headers: {
  //         "Content-Type": "application/json; charset=utf-8",
  //         // "Content-Type": "application/x-www-form-urlencoded",
  //     },
  //     body: JSON.stringify({
  //       email: email,
  //       password: password,
  //     }),
  //   }).then(response => {
  //     if(response.status === 200) {
  //       this.isAuthenticated = true;
  //       cb();
  //       return response.json();
  //     }
  //   }).then(body => {
  //     console.log(body);
  //   })
  // }
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
          user_id:'',
          name:'',
          email:'',
      }
    }
  }


loadUser = (data) => {
  this.setState({user:{
          user_id: data.user_id,
          name:data.name,
          email:data.email,
  }})
} 

authenticate = () =>{
  Auth.isAuthenticated = true;

}


  render() {  
    return (
      <div className="App">
      
      <Switch>
        <Route exact path='/' component={() => <Login loadUser ={this.loadUser} authenticate={this.authenticate}/>}/>
        <Route path = '/Register' component ={() => <Register loadUser ={this.loadUser} authenticate={this.authenticate}/>}/>
        <PrivateRoute exact path='/Form' component={Form}/>
        <PrivateRoute path='/Calendar' component={Calendar}/>
        <PrivateRoute path='/Users' component={Users}/>
        <PrivateRoute path='/Groups' component={GroupsBoard}/>
      </Switch>
          
      </div>
    );
  }
}


export default App;
