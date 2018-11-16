import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export class UserDetails extends Component { 


	continue = e => {
  		e.preventDefault();
  		this.props.nextStep();
  	} 

  render() { 
   const {values, handleChange} = this.props;
    return (
      <div>
      	<React.Fragment>
      	<br/>
      		<br/>
      		<TextField
      			label ="Enter Your First Name"
      			onChange ={handleChange('firstName')}
      			defaultValue = {values.firstName}
      		/>
      		<br/>
      		<br/>
      		<TextField
      			label ="Enter Your Last Name"
      			onChange ={handleChange('lastName')}
      			defaultValue = {values.lastName}
      		/>
      		<br/>
      		<br/>
      		<br/>
      		<Button
      			variant="outlined" 
      			size="small" 
      			color="primary"
      			onClick = {this.continue}
      		> Continue </Button>
      	</React.Fragment>
      
          
      </div>
    );
  }
}


export default UserDetails;