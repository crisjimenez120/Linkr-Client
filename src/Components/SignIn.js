import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Link, Redirect } from 'react-router-dom';
import CalendarIcon from '@material-ui/icons/CalendarTodayTwoTone';
import './SignIn.css';
import { Spring } from 'react-spring'

class SignIn extends React.Component  {
	constructor(props){
		super();
		this.state = {
			email: '',
			password: '',
			isAuthenticated: false
		}
	}


	onEmailChange= (event) =>{
		//console.log(event.target.value)
		this.setState({email: event.target.value})
	}
	onPasswordChange= (event) =>{
		//console.log(event.target.value)
		this.setState({password: event.target.value})
	}

	onSubmitSignIn = () =>{
		// console.log(this.state.event)
		// console.log(this.state.password)
		//console.log(this.state.isAuthenticated);
		fetch('/signin/api_signin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body:JSON.stringify({
				email:this.state.email,
				password: this.state.password
			})
		}).then(response => response.json())
		.then(user => {
			if(user.email){
				//console.log("sending back the user");
				this.props.loadUser(user);
		 		this.props.auth();
			}
		}).then(setTimeout (() => {
      			window.location.reload()
    			}, 500)
    	)
		
	}

	



	render(){

		if(this.props.isAuthenticated){
			return <Redirect to ='/Calendar'/> 
		}
		return(
			<Spring
			  config={{ tension: 180, friction: 12 }}
			  from={{ transform: 'rotateX(-180deg)' }}
			  to={{ transform: 'rotateX(0deg)' }}>
			  {props => 
		<div style={props} className = "SignIn">
			<div>
			<Typography variant="h3" color="primary" noWrap>
			<CalendarIcon/>
              Linkr
            
            </Typography>
            
			</div>
			<div>
				<TextField
		          //id="outlined-with-placeholder"
		          label="Email"
		          type ="text"
		          value = {this.state.email}
		          className ="TextField"
		          margin = "normal"
		          variant="outlined"
		          onChange={this.onEmailChange}
		        />
			</div> 
			<div>
				<TextField
          		  id="outlined-password-input"
		          label="Password"
		          value = {this.state.password}
		          className ="TextField"
		          type = "Password"
		          margin = "normal"
		          variant="outlined"
		          onChange = {this.onPasswordChange}
		        />
			</div> 
			<div>
				<div>
					<Button variant="outlined" size="large" color="primary" onClick = {() => this.onSubmitSignIn()} style = {{margin: 10}}> Log In </Button>
				</div>
				 <Link to={'/Register'} style={{ textDecoration: 'none' }}>
					<Button variant="outlined" size="large" color="primary" style = {{margin: 10}}> Register </Button>
				</Link>
				
			</div> 
		 </div>
		 }
</Spring>
	)}
	}
	



export default SignIn;