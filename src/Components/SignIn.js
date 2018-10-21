import React from 'react';


class SignIn extends React.Component  {
	state ={
		email: '',
		password: ''
	}

	
	render(){
		return(
		<div>
			<div>
				<input value ={this.state.name} placeholder ="email"/>
			</div> 
			<div>
				<input value ={this.state.name} placeholder ="password"/>
			</div> 
			<div>
				<button onClick= {this.submitMe}>LOG ME IN BBY</button>
			</div> 
		 </div>
	)}
			
	
}

export default SignIn;