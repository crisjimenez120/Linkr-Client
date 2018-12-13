import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import CalendarIcon from '@material-ui/icons/CalendarTodayTwoTone';
import './Nav.css'



class SimpleAppBar extends React.Component{

 
  render(){
    return(
      
    <div className = "topnav">
      <AppBar position="static" className = "topnav">
        <Toolbar className = "topnav" > 
          <div >
          <Typography variant="h3" style= {{color: "white"}} >
          <CalendarIcon/>
            Linkr
          </Typography>
          </div>
          <div>
          <Typography variant="h3" style= {{color: "white"}} >
            {this.props.toggle ? this.props.user : this.props.group}
          </Typography>
          </div>
          <div>
          <Link to={'/'} style={{ textDecoration: 'none' }}>
            <Button onClick = {() => this.props.unloadUser()} variant="outlined" size="large" color="default" style = {{margin: 10,color: "white" }}> Logout </Button>
          </Link>
          </div>
          
          
        </Toolbar>
      </AppBar>
    </div>
    
    );
  }
    
}


export default SimpleAppBar;