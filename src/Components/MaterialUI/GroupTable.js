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

const rows = [
  createData('BrOliC BoYz ಠ_ಠ', 4),
  createData('PowerPuff Girls', 159, ),
  createData('Teenage Mutant Ninja Turtles', 237),
  createData('Aerosmith', 262 ),
  createData('The Avengers', 305),
  createData('Thunder Cats', 50),
  createData('Suicide Squad', 10),
  createData('Justice League', 43),
  createData('Teen Titans', 3),
  createData('Spice Girls', 50),
  createData('Backstreet Boys', 83),
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root} style={{ width: "50vw" ,display: "flex", justifyContent: "center"}}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Groups</TableCell>
            <TableCell numeric>Number Of Members</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                <Link to={'/Users'} style={{ textDecoration: 'none', color:'black' }}>
                  {row.name}
                </Link>
                </TableCell> 
                  <TableCell numeric>{row.NumberOfMembers}</TableCell> 
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
