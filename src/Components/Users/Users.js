import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from "../MaterialUI/Cards.js"
import './Users.css';


class Users extends React.Component  {
	state = {
		users:[],
	}

	

	  	// componentWillMount(){
	  	// 	 this.getData();
	  	// }

	componentDidMount(){
	    fetch('/users').then( res => res.json())
	                   .then( users => this.setState({ users }));
  	}

  // 	getData(){
	    
		// console.log('Our data is fetched');
		// this.setState({
		// 	users: [{id: 999, name:"Loading", role:"loading" }]
		// }) 
	 //  }
	 
	render(){
		return(
			<div>
				<Typography variant="h3" color="inherit" noWrap>
              		Users
            	</Typography>
            	<div className = "Users">        
		          {this.state.users.map( user =>
		            	<Card user = {user}/> 
		            )}		
		        </div>        
		    </div>
	)}
			
	
}

export default Users;