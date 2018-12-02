import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';


function getModalStyle() {
  const top = 50 
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class SimpleModal extends React.Component {
  state = {
    groupName: '',
    groupDesc: '',
    open: false,
  };

  onSubmitModal = () =>{
    console.log(this.state.groupName)
    console.log(this.state.groupDesc)

    fetch('/signin/api_create_group', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify({
        groupName: this.state.groupName,
        groupDesc: this.state.groupDesc,
        email:this.props.user.emails
      })
    })
    
  }
  
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button variant="fab" color="primary" aria-label="Add" mini= "true" onClick={this.onSubmitModal}><AddIcon /></Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              <TextField
                label ="Group Name"
                floatingLabelText ="Group Name"
                onChange ={console.log("hi")}
                //defaultValue = {}
              />
            </Typography>
            <br/>
            <br/>
            <Typography variant="subtitle1" id="simple-modal-description">
              <TextField
                label="Group Description"
                multiline
                rows="4"
                variant="outlined"
                //onChange ={handleChange('eventDescription')}
                //defaultValue = {values.eventDescription}
              />
            </Typography>
            <br/>
           <Button variant="outlined" size="small" color="primary" onClick = {this.onSubmitSignIn} >Submit</Button>
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;
