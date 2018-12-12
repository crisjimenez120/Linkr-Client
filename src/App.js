import React, { Component } from 'react';
import Login from './Components/SignIn.js'
import Calendar from './Components/Calendar/Calendar.js'
import Users from "./Components/Users/Users.js"
import Form from "./Components/Form/Form.js"
import Register from "./Components/Register/Register.js"
import GroupsBoard from "./Components/GroupsBoard/GroupsBoard.js"
import './App.css';
import User from './User.js';
import { Switch, 
         Route,
 //        Link,
         Redirect,
 //        withRouter
       } from 'react-router-dom'

const Auth = {
  isAuthenticated: false,
}

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        User.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              //state: { from: props.location }
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
      /*isSignedIn: Auth.isAuthenticated,
      User:{
          id:'',
          name:'',
          email:'',
      }*/
    }
  }


loadUser = (data) => {
  User.id = data.id;
  User.name = data.user_name;
  User.email = data.email;
  console.log (User);
  /*this.setState({User:{
          id: data.id,
>>>>>>> 9de190bbf42f6ce05cf077859bed80fc681cc57a
          name:data.user_name,
          email:data.email,
  }})*/
  console.log(data);
} 

authenticate = (e) =>{

  User.isAuthenticated = e
  console.log ("You da right nigga: " + User.isAuthenticated);
}


  render() {  
    return (
      <div className="App">
      
      <Switch>
        <Route exact path='/' component={() => <Login loadUser ={this.loadUser} authenticate={this.authenticate} isAuthenticated = {Auth.isAuthenticated}/>}/>
        <Route path = '/Register' component ={() => <Register loadUser ={this.loadUser} authenticate={this.authenticate}/>}/>
        <PrivateRoute exact path='/Form' component ={() => <Form user ={User}/>}/>
        <PrivateRoute path='/Calendar' component ={() => <Calendar user ={User}/>}/>
        <PrivateRoute path='/Users' component ={() => <Users user ={User}/>}/>
        <PrivateRoute path='/Groups' component ={() => <GroupsBoard user ={User}/>}/>
      </Switch>
          
      </div>
    );
  }
}


export default App;
