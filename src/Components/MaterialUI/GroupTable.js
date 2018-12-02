import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import Modal from './Modal'
const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit *3,
    //overflowX: 'auto',
    //display: 'flex',
    //justifyContent: 'right',
    margin: 10
  },
  table: {
    minWidth: 100,
    
  },
});

let id = 0;
function createData(name, NumberOfMembers) {
  id += 1;
  return { id, name, NumberOfMembers };
}

const rows = [];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <div>
    <Paper className={classes.root} style={{ width: "50vw" ,display: "flex", justifyContent: "center"}}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Groups</TableCell>
            <TableCell numeric>Number Of Members</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.groups.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                <Link to={'/Users'} style={{ textDecoration: 'none', color:'black' }}>
                  {row.group_name}
                </Link>
                </TableCell> 
                <TableCell >Admin: {row.admin}</TableCell> 
                  <TableCell >{row.group_desc}</TableCell> 
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
    <Modal/>
    </div>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
