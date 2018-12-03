import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
//import { Link } from 'react-router-dom';
import Modal from './Modal'
import EditGroup from './EditGroup'

// const styles = theme => ({
//   root: {
//     width: '100%',
//     marginTop: theme.spacing.unit *3,
//     //overflowX: 'auto',
//     //display: 'flex',
//     //justifyContent: 'right',
//     margin: 10
//   },
//   table: {
//     minWidth: 100,
    
//   },
// });

function SimpleTable(props) {
  

  return (
    <div>
    <Paper style={{ width: "50vw" ,display: "flex", justifyContent: "center"}}>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>Groups</TableCell>
            <TableCell numeric>Number Of Members</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.groups.map(group => {
            return (
              <TableRow key={group.id}>
                <TableCell component="th" scope="row">
                
                  {group.group_name}
                  <EditGroup group = {group}/>
            
                </TableCell> 
                <TableCell >Admin: {group.admin}</TableCell> 
                  <TableCell >{group.group_desc}</TableCell> 
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
    <Modal user = {props.user}/>
    </div>
  );
}



export default (SimpleTable);
