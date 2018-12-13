import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import styled from 'styled-components';



 const EvenSpacing = styled.div`
    display: flex
    justify-content: space-between
  `;

class SimpleAppBar extends React.Component{

 
  render(){
    return(
    <div>
      <AppBar position="static" color="primary">
        <Toolbar>
          <EvenSpacing>
          <div >
          <Typography variant="h3" style= {{color: "white"}} >

            Linkr
          </Typography>
          </div>
          <div style={{marginRight: '35vw', marginLeft: '35vw' }}>
          <Typography variant="h3" style= {{color: "white"}} >
            {this.props.user}
          </Typography>
          </div>
          <div>
          <Link to={'/'} style={{ textDecoration: 'none' }}>
            <Button onClick = {() => this.props.unloadUser()} variant="outlined" size="large" color="default" style = {{margin: 10,color: "white" }}> Logout </Button>
          </Link>
          </div>
          </EvenSpacing>
          
        </Toolbar>
      </AppBar>
    </div>
    );
  }
    
}


export default SimpleAppBar;