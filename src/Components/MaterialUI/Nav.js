import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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
          <div style={{display: "flex", margin: 10}}>
          <Typography variant="h3" color="textSecondary" style={{ marginRight: "30vw"}}>
            Linkr
          </Typography>
          <Typography variant="h3" color="textSecondary" >
            {this.props.user}
          </Typography>
          </div>
          <Link to={'/'} style={{ textDecoration: 'none' }}>
            <Button onClick = {() => this.props.unloadUser()} variant="outlined" size="large" color="default" style = {{margin: 10}}> Logout </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
    );
  }
    
}


export default SimpleAppBar;