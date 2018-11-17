import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

class SignIn extends React.Component  {
	state ={
		email: '',
		password: ''
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
		console.log(this.state.event)
		console.log(this.state.password)

		fetch('/api_signin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body:JSON.stringify({
				email:this.state.email,
				password: this.state.password
			})
		}).then(response => response.json())
		// .then(user => {
		// 	if(user.id){
		// 		this.props.loadUser(user);
		// 		this.props.onRouteChange('home');
		// 	}
		// })
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
				{/*<Link to={'/calendar'} style={{ textDecoration: 'none' }}>*/}
					<Button variant="outlined" size="Large" color="primary" onClick = {this.onSubmitSignIn}> LOG ME IN </Button>
				{/*</Link>*/}
				</div>
				 <Link to={'/Register'} style={{ textDecoration: 'none' }}>
					<Button variant="outlined" size="Large" color="primary" style = {{margin: 10}}> Go To Register </Button>
				</Link>
				
			</div> 
		 </div>
	)}
			
	
}


export default SignIn;