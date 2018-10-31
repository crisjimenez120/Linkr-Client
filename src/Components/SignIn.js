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

	
	render(){
		return(
		<div>
			<div>
			<Typography variant="h3" color="inherit" noWrap>
              Linkr
            </Typography>
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
				<Link to={'/calendar'} style={{ textDecoration: 'none' }}>
					<Button variant="outlined" size="small" color="primary" > LOG ME IN BBY </Button>
				</Link>
			</div> 
		 </div>
	)}
			
	
}

export default SignIn;