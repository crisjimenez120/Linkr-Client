import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

//import TextField from '@material-ui/core/TextField';
import Card from './Cards'
import styled from 'styled-components';


function getModalStyle() {
  const top = 50 
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
 
  const Scrollable = styled.div`
    height: 80vh;
    overflow-y: scroll;
  `;
 
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
      open: false,
    }
  }
 
  componentDidMount(){
      this.getAllUsers();
    }

  getAllUsers(){
    fetch('/users/api_all_users').then( res => res.json())
                     .then( users => this.setState({ users }));
  }

  onAddUser = (userEmail) => {
    fetch('/groups/api_add_groups_to_user', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify({
        group_id: this.props.group.group_id,
        email: userEmail
      })
    })
  }

  onDeleteUser = (userEmail) => {
      fetch('/groups/api_delete_groups_to_users', {
        method: 'delete',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify({
          group_id: this.props.group.group_id,
          email: userEmail
        })
      })
    }

  compare = (email) => {
    let flag = false;
    this.state.inGroup.map(user =>{
      if(user.user_email === email){
        flag = true;
      }
    })
    return flag;
  }

  handleOpen = () => {
    this.setState({ open: true });
    fetch('/groups/api_get_all_users_for_group',{
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          headers: {
              "Content-Type": "application/json; charset=utf-8",
          },
          body: JSON.stringify({
            group_id: this.props.group.group_id,
          }),
    }).then( res => res.json())
      .then( users => this.setState({ inGroup : users }));
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
           <Scrollable>
           <div>       
              {this.state.users.map( user =>
                <div key = {user.id}>
                  <Card  user = {user}/> 
                  {this.compare(user.email) === false ? <Button variant="outlined" size="small" color="primary" fullWidth={true} onClick={() => { this.onAddUser(user.email)}}>Add</Button> :
                  <Button variant="outlined" size="small" color="secondary" fullWidth={true} onClick = {() => {this.onDeleteUser(user.email)}} >Delete</Button>}
                  </div>
                )}
              {this.state.inGroup.map( user =>
                 user.user_email
                )}
            </div>
            </Scrollable>
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
