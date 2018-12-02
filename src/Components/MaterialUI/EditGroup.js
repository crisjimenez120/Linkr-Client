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
 
  constructor(props) {
    super(props)
    this.state = 
    {
      users: [],
      inGroup:[],
    }
  }
  componentDidMount(){
      fetch('/users/api_all_users').then( res => res.json())
                     .then( users => this.setState({ users }));
    }

  // onAddUser = () => {

  //   fetch('/groups/api_create_group', {
  //     method: 'post',
  //     headers: {'Content-Type': 'application/json'},
  //     body:JSON.stringify({
  //       group_id: this.props.group.group_id,
  //       groupDesc: this.state.groupDesc,
  //       email:this.props.user.email
  //     })
  //   })
    
  //}
  
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
        <Button variant="fab" color="primary" aria-label="Add" mini= {true} onClick={this.handleOpen}> <AddIcon /></Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
           <div>       
              {this.state.users.map( user =>
                  <Card  user = {user}/> 
                )}
            </div>
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
