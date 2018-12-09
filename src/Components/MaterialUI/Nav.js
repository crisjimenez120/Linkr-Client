import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


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
            {this.props.user.name}
          </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </div>
    );
  }
    
}


export default SimpleAppBar;