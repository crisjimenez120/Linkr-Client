import React, { Component } from 'react';
import Login from './Components/SignIn.js'
import Calendar from './Components/Calendar/Calendar.js'
import Users from "./Components/Users/Users.js"
import Form from "./Components/Form/Form.js"
import Register from "./Components/Register/Register.js"
import GroupsBoard from "./Components/GroupsBoard/GroupsBoard.js"
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';

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
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

constructor(props){
    super(props);
    const { cookies } = props;
    this.state = {
      isSignedIn: cookies.get('Auth') || false,
      User:{
          id: cookies.get('id') || '0',
          name: cookies.get('name') || 'null',
          email: cookies.get('email') || 'null'
      }
    }
  }


loadUser = (data) => { // logs in the user using cookies
  const { cookies } = this.props;
  cookies.set('id', data.id, { path: '/' });
  cookies.set('name', data.user_name, { path: '/' });
  cookies.set('email', data.email, { path: '/' });
  cookies.set('Auth', true, { path: '/' } );
  Auth.isAuthenticated = cookies.get('Auth');
  this.setState({
    isSignedIn: true,
    User:{
          id: data.id,
          name:data.user_name,
          email:data.email,
  }})
  console.log(this.state.User);
} 

unloadUser = () => { // logs out the user using cookies
  const { cookies } = this.props;
  cookies.set('id', 0, { path: '/' });
  cookies.set('name', null, { path: '/' });
  cookies.set('email', null, { path: '/' });
  cookies.set('Auth', false, { path: '/' } );
  Auth.isAuthenticated = false;
}


componentWillMount(){
    const { cookies } = this.props;

  this.setState({
    isSignedIn:false,
    User:{
          id: cookies.get('id') || '0',
          name: cookies.get('name') || 'null',
          email: cookies.get('email') || 'null'
      }
  })
  Auth.isAuthenticated = cookies.get('Auth');
}
auth = () =>{
  this.setState({
    isSignedIn : true
  })
}

  render() {  
    return (
      <div className="App">
      
      <Switch>
        <Route exact path='/' component={() => <Login loadUser ={this.loadUser} auth = {this.auth} isAuthenticated = {this.state.isSignedIn}/>}/>
        <Route path = '/Register' component ={() => <Register loadUser ={this.loadUser} /> }/>
        <PrivateRoute exact path='/Form' component ={() => <Form user ={this.state.User} unloadUser ={this.unloadUser}/>}/>
        <PrivateRoute path='/Calendar' component ={() => <Calendar user ={this.state.User} unloadUser ={this.unloadUser} isAuthenticated = {this.state.isSignedIn}/>}/>
        <PrivateRoute path='/Users' component ={() => <Users user ={this.state.User} unloadUser ={this.unloadUser}/>}/>
        <PrivateRoute path='/Groups' component ={() => <GroupsBoard user ={this.state.User} unloadUser ={this.unloadUser}/>}/>
      </Switch>
          
      </div>
    );
  }
}


export default withCookies(App);
