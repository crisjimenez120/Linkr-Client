import React from 'react';
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

	componentDidMount(){
	    fetch('/users/api_all_users').then( res => res.json())
	                   .then( users => this.setState({ users }));
  	}

	 
	render(){
		return(
			<div>
				<div>
					<Nav user = {this.props.user}/>
				</div>
				<Typography variant="h3" color="inherit" noWrap>
              		Friends
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
		                 
		    </div>
	)}
}

export default Users;