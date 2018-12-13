import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Radio from '@material-ui/core/Radio';
import IconButton from '@material-ui/core/IconButton';
import RadioGroup from '@material-ui/core/RadioGroup';

//import { Link } from 'react-router-dom';
import Modal from './Modal'
import EditGroup from './EditGroup'


const styles = theme => ({
  root: {
    width: '43vw',
    backgroundColor: theme.palette.background.paper,
  },
});






class GroupTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
  }
 

  handleChange = event => {
    console.log(event);
    this.setState({ value: event});
    this.props.onSelectGroup(this.state.value);
    
  };


  render() {
    const { classes } = this.props;

    return (
      <div >
      <List className={classes.root}>
        
        {this.props.groups.map(group => (

          <ListItem key={group.group_id} role={undefined} dense button onClick={() => this.handleChange(group.group_id)}>
             {group.group_id}
            <ListItemText primary={group.group_name} />
                <EditGroup group = {group}/>
           
          </ListItem>
        ))}

      </List>
       <Modal user = {this.props.user}/>
       </div>
    );
  }
}




GroupTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GroupTable);