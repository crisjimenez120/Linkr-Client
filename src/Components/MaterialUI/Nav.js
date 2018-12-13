import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';




class SimpleAppBar extends React.Component{

 
  render(){
    return(
      
    <div>
      <AppBar position="static" color="primary">
        <Toolbar> 
          <div >
          <Typography variant="h3" style= {{color: "white"}} >
            Linkr
          </Typography>
          </div>
          <div>
          <Typography variant="h3" style= {{color: "white", marginLeft: '10vw',marginRight: '35vw'}} >
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