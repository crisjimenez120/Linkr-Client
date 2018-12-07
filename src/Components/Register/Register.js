import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

class Register extends React.Component  {
	constructor(){
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
				this.props.loadUser(user);
		 		this.props.authenticate(true);
			}
		})
	}
	
	render(){
		return(
		<div>
			<div>
			<Typography variant="h3" color="inherit" noWrap>
              Linkr
              
              </Typography>
              <div>
				<TextField
		          id="outlined-with-placeholder"
		          label="Enter Name"
		          placeholder="Name"
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
		          variant="outlined"
		          onChange={this.onEmailChange}
		        />
			</div> 
			<div>
				<TextField
		          id="outlined-with-placeholder"
		          label="Enter Password"
		          placeholder="Password"
		          margin="normal"
		          variant="outlined"
		          onChange = {this.onPasswordChange}
		        />
			</div> 
			<div>
				<div>
				<Link to={'/calendar'} style={{ textDecoration: 'none' }}>
					<Button variant="outlined" size="large" color="primary" onClick = {this.onSubmitSignIn}>Register</Button>
				</Link>
				</div>
				<Link to={'/'} style={{ textDecoration: 'none' }}>
					<Button variant="outlined" size="large" color="primary" style = {{margin: 10}}> Go to Sign In </Button>
				</Link>
			</div> 
		 </div>
	)}
			
	
}


export default Register;