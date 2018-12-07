
// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import Button from '@material-ui/core/Button';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
// import MenuIcon from '@material-ui/icons/Menu';
// import Group from '@material-ui/icons/Group';
// import Person from '@material-ui/icons/Person';
// import Typography from '@material-ui/core/Typography';


// const styles = {
//   list: {
//     width: 250,
//   },
//   fullList: {
//     width: 'auto',
//   },
// };

// class TemporaryDrawer extends React.Component {
//   state = {
//     left: false,
//   };

//   toggleDrawer = (side, open) => () => {
//     this.setState({
//       [side]: open,
//     });
//   };

//   render() {
//     const { classes } = this.props;


//     const fullList = (
//       <div className={classes.fullList}>
      
//         <List>
         
//             <ListItem button key= "User">
//               <ListItemIcon>
//                   <Person/>
//               </ListItemIcon>
//               <ListItemText primary= "User" />
//             </ListItem>

//             <ListItem button key= "Group">
//               <ListItemIcon>
//                   <Group/>
//               </ListItemIcon>
//               <ListItemText primary= "Group" />
//             </ListItem>     
//         </List>
//         <Divider />
//         <List>
//           {['Calendar', 'Edit Calendar'].map((text, index) => (
//             <ListItem button key={text}>
//               <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItem>
//           ))}
//         </List>
//       </div>
//     );

//     return (
//       <div>
//         <div onClick={this.toggleDrawer('left', true)}><MenuIcon /></div>
//         <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
//           <div
//             tabIndex={0}
//             role="button"
//             onClick={this.toggleDrawer('left', false)}
//             onKeyDown={this.toggleDrawer('left', false)}
//           >
//           <Typography className={classes.title} variant="h6" color="inherit" noWrap>         
//               Menu               
//           </Typography>
//             {fullList}
//           </div>
//         </Drawer>
       
//       </div>
//     );
//   }
// }

// TemporaryDrawer.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(TemporaryDrawer);
