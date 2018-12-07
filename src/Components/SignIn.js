import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

class SignIn extends React.Component  {
	constructor(props){
		super();
		this.state = {
			email: '',
			password: '',
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
				console.log("sending back the user");
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
            
			</div>
			<div>
				<TextField
		          //id="outlined-with-placeholder"
		          label="Enter Email"
		          placeholder="Email"
		          margin="normal"
		          type ="text"
		          variant="outlined"
		          onChange={this.onEmailChange}
		        />
			</div> 
			<div>
				<TextField
          		  id="outlined-adornment-password"
		          label="Enter Password"
		          placeholder="Password"
		          //type = "password"
		          margin="normal"
		          variant="outlined"

		          onChange = {this.onPasswordChange}
		        />
			</div> 
			<div>
			<div>
				<Button variant="outlined" size="large" color="primary" onClick = {this.onSubmitSignIn} style = {{margin: 10}}> LOG ME IN </Button>
				<Link to={'/Calendar'} style={{ textDecoration: 'none' }}>
					<Button variant="outlined" size="large" color="primary" style = {{margin: 10}}> Go To Calendar </Button>
				</Link>
				</div>
				 <Link to={'/Register'} style={{ textDecoration: 'none' }}>
					<Button variant="outlined" size="large" color="primary" style = {{margin: 10}}> Go To Register </Button>
				</Link>
				
			</div> 
		 </div>
	)}
			
	
}


export default SignIn;