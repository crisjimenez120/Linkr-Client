import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
//import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';

const ranges = [
  {
    value: 'F0FF00',
    label: 'yellow',
  },
  {
    value: 'FF0000',
    label: 'red',
  },
  {
    value: '90ee90',
    label: 'green',
  },
]

export class EventForm extends Component { 


	continue = e => {
  		e.preventDefault();
  		this.props.nextStep();
  	} 
  prev = e => {
      e.preventDefault();
      this.props.prevStep();
    } 

  render() { 
   const {values, handleChange} = this.props;
    return (
      <div>
      	<React.Fragment>
      	<br/>
      		<br/>
      		<TextField
      			label ="Event Title"
      			floatingLabelText ="Event Title"
      			onChange ={handleChange('eventTitle')}
      			defaultValue = {values.eventTitle}
      		/>
      		<br/>
      		<br/>
      		<TextField
      			label ="Start Date and Time"
      			floatingLabelText ="Start Date and Time"
      			onChange ={handleChange('eventDateStart')}
      			defaultValue = {values.eventDateStart}
      		/>
      		<br/>
      		<br/>
          <TextField
            label ="End Date and Time"
            floatingLabelText ="End Date and Time"
            onChange ={handleChange('eventDateEnd')}
            defaultValue = {values.eventDateEnd}
          />
          <br/>
          <br/>
          <TextField
            label="Event Description"
            multiline
            rows="4"
            variant="outlined"
            onChange ={handleChange('eventDescription')}
            defaultValue = {values.eventDescription}
          />
          <br/>
          <TextField
            select
            label="Select"
            onChange={handleChange('eventColor')}
            helperText="Please select Event Color"
            value={values.eventColor}
            margin="normal"
            variant="filled"
          >
          {ranges.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      		<br/>
          
          <br/>
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
            style ={{margin: 10}}
      		> Continue </Button>
         
      	</React.Fragment>
      
          
      </div>
    );
  }
}


export default EventForm;