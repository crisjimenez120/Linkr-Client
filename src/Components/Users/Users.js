import React from 'react';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from "../MaterialUI/Cards.js"
import './Users.css';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Nav from '../MaterialUI/Nav.js';


class Users extends React.Component  {
	state = {
		users:[],
	}

	

	  	componentWillMount(){
	  		 this.getData();
	  	}

	componentDidMount(){
	    fetch('/users/api_all_users').then( res => res.json())
	                   .then( users => this.setState({ users }));
  	}

  	getData(){
	    
		console.log('Our data is fetched');
		this.setState({
			users: [{id: 999, name:"Loading", role:"loading" }]
		}) 
	  }
	 
	render(){
		return(
			<div>
				<div>
					<Nav user = {this.props.user}/>
				</div>
				<Typography variant="h3" color="inherit" noWrap>
              		BrOliC BoYz
              		
            	</Typography>
            		<Link to={'/Groups'} style={{ textDecoration: 'none', color:'black' }}>
             			  <Button variant="outlined" size="large" color="primary">Add to Group</Button>
       			 	</Link>
            	<div className = "Users"> 
            		<div>       
		          {this.state.users.map( user =>
		            	<Card  user = {user}/> 
		            )}
		          	</div>
		            <br/>		
		        </div> 
		        {// <div className = "Users">        
		        //   {this.state.users.map( user =>
		        //     	<Card user = {user}/> 
		        //     )}		
		        // </div> 
		        } 
		                 
		    </div>
	)}
			
	
}

export default Users;