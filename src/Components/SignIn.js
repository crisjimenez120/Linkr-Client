import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';

class SignIn extends React.Component  {
	state ={
		email: '',
		password: ''
	}

	
	render(){
		return(
		<div>
			<div>
				<TextField
		          id="outlined-with-placeholder"
		          label="Enter Email"
		          placeholder="Email"
		          margin="normal"
		          variant="outlined"
		        />
			</div> 
			<div>
				<TextField
		          id="outlined-with-placeholder"
		          label="Enter Password"
		          placeholder="Password"
		          margin="normal"
		          variant="outlined"
		        />
			</div> 
			<div>
				{/*<Button variant="outlined" size="small" color="primary" > LOG ME IN BBY </Button>*/}
			</div> 
		 </div>
	)}
			
	
}

export default SignIn;