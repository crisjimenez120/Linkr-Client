import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';

//import { Link } from 'react-router-dom';
import Modal from './Modal'
import EditGroup from './EditGroup'


const styles = theme => ({
  root: {
    width: '43vw',
    backgroundColor: theme.palette.background.paper,
  },
});






class CheckboxList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: [0],
    }
  }
 
  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div >
      <List className={classes.root}>
        {this.props.groups.map(group => (
          <ListItem key={group.id} role={undefined} dense button onClick={this.handleToggle(group)}>
            <Checkbox
              checked={this.state.checked.indexOf(group) !== -1}
              tabIndex={-1}
              disableRipple
            />
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




CheckboxList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxList);