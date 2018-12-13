import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
//import { Link } from 'react-router-dom';
import Modal from './Modal'
import EditGroup from './EditGroup'
import { Trail } from 'react-spring'

const styles = theme => ({
  root: {
    width: '43vw',
    marginTop: 20,
    backgroundColor: '#E7E8E9',
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
    this.setState({ value: event}, this.props.onSelectGroup(this.state.value));
  };


  render() {
    const { classes } = this.props;

    return (
      <div >

      <List className={classes.root}>
                  
          <Trail
            items={this.props.groups} keys={group => group.group_id}
            from={{  transform: 'rotate(45deg)', opacity: 0, x: -100 }}
            to={{ transform: 'rotate(0deg)', opacity: 1 , x: 0 }}>
            {group => props =>
              <ListItem style={props} key={group.group_id} role={undefined} dense button onClick={() => this.handleChange(group.group_id)}>
                      <ListItemText primary={group.group_name} />
                          <EditGroup group = {group}/>
                </ListItem>
            }
          </Trail>

      </List>
       <Modal user = {this.props.user} addGroup = {this.props.addGroup}/>
       </div>
    );
  }
}




GroupTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GroupTable);