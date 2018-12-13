import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Link, Redirect } from 'react-router-dom';
import CalendarIcon from '@material-ui/icons/CalendarTodayTwoTone';
import './SignIn.css';
import { Spring } from 'react-spring'

class Register extends React.Component  {
	constructor(props){
	    super();
	    this.state = {
	      user:{
	        name: '',
			email: '',
			password: '',
	      }
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
	onNameChange= (event) =>{
		//console.log(event.target.value)
		this.setState({name: event.target.value})
	}

	onSubmitSignIn = () =>{
		fetch('/registration/api_registration', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body:JSON.stringify({
				name: this.state.name,
				email:this.state.email,
				password: this.state.password
			})
		}).then(response => response.json())
		.then(user => {
			if(user.id){
				this.props.loadUser(user)
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
			  from={{ transform: 'rotateY(180deg)' }}
			  to={{ transform: 'rotateY(0deg)' }}>
			  {props => 
		<div style={props} className = "Register">
			<div>
			<Typography variant="h3" color="primary" noWrap>
					<CalendarIcon/>
		              Linkr
            </Typography>
              <div>
				<TextField
		          id="outlined-with-placeholder"
		          label="Enter Name"
		          placeholder="Name"
		          className ="TextField"
		          margin="normal"
		          variant="outlined"
		          onChange={this.onNameChange}
		        />
			</div> 
            
				<TextField
		          id="outlined-with-placeholder"
		          label="Enter Email"
		          placeholder="Email"
		          margin="normal"
		          className ="TextField"
		          variant="outlined"
		          onChange={this.onEmailChange}
		        />
			</div> 
			<div>
				<TextField
		          id="outlined-with-placeholder"
		          label="Enter Password"
		          placeholder="Password"
		          className ="TextField"
		          //type = "password"
		          margin="normal"
		          variant="outlined"
		          onChange = {this.onPasswordChange}
		        />
			</div> 
			<br/>
			<div>
				<div>
					<Button variant="outlined" size="large" color="primary" onClick = {this.onSubmitSignIn}>Register</Button>
				</div>
				<Link to={'/'} style={{ textDecoration: 'none' }}>
					<Button variant="outlined" size="large" color="primary" style = {{margin: 10}}>Sign In </Button>
				</Link>
			</div> 
		 </div>
		 }
</Spring>
	)}
			
	
}


export default Register;