import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export class Confirm extends Component { 


	continue = e => {
  		e.preventDefault();
      //PROCESS FORM/SEND TO THE BACKEND
  		this.props.nextStep();
  	} 
  prev = e => {
      e.preventDefault();
      this.props.prevStep();
    } 
  render() { 
   const {values: {firstName, lastName, eventTitle, eventDescription,
         eventDateStart, eventDateEnd, eventColor}} = this.props;
    return (
      <div >
      	<React.Fragment>
      	<br/>
      		<br/>
          <div style ={{display: "flex", justifyContent: "center"}}>
          <List >
            <ListItem>
              <ListItemText primary = "First Name" secondary = {firstName} />
            </ListItem>
            <ListItem>
              <ListItemText primary = "Last Name" secondary = {lastName} />
            </ListItem>
            <ListItem>
              <ListItemText primary = "Event Title" secondary = {eventTitle} />
            </ListItem>
            <ListItem>
              <ListItemText primary = "Event Description" secondary = {eventDescription} />
            </ListItem>
            <ListItem>
              <ListItemText primary = "Start" secondary = {eventDateStart} />
            </ListItem>
            <ListItem>
              <ListItemText primary = "End" secondary = {eventDateEnd} />
            </ListItem>
            <ListItem>
              <ListItemText primary = "Color" secondary = {eventColor} />
            </ListItem>
          </List>
      		</div>
          <Button
            variant="outlined" 
            size="small" 
            color="default"
            style ={{margin: 10}}
            onClick = {this.prev}
          > Go Back </Button>
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


export default Confirm;