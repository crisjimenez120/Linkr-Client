import React from 'react'
import Board from 'react-trello'
import Nav from '../MaterialUI/Nav.js';

 

 const users = [
			{id: 'Card10', title: 'Cris', description: 'BrOliC BoY1', label: 'Admin'},
		    {id: 'Card20', title: 'Ismail', description: 'BrOliC BoY2', label: 'Member'},
		    {id: 'Card30', title: 'Saif', description: 'BrOliC BoY3', label: 'Member'},
		    {id: 'Card40', title: 'EddyG', description: 'BrOliC BoY4', label: 'Member'},
		    {id: 'Card50', title: 'Joelle', description: 'BrOliC BoY5', label: 'Member'}

		    ]


 

export default class GroupsBoard extends React.Component {
	state = {
		lanes: [
		    {
		      id: 'lane1',
		      title: 'Friends',
		      label: 'N/A',
		      cards: users,
		    },
		    {
		      id: 'lane2',
		      title: 'BrOliC BoYz',
		      label: 'N/A',
		      cards: [
		      	{id: 'Card11', title: 'Cris', description: 'BrOliC BoY1', label: 'Admin'},
		    	{id: 'Card21', title: 'Ismail', description: 'BrOliC BoY2', label: 'Member'},
		   		{id: 'Card31', title: 'Saif', description: 'BrOliC BoY3', label: 'Member'},
		    	{id: 'Card41', title: 'EddyG', description: 'BrOliC BoY4', label: 'Member'},
		    	{id: 'Card51', title: 'Joelle', description: 'BrOliC BoY5', label: 'Member'}]
		    },
		    {
		      id: 'lane3',
		      title: 'PowerPuff Girls',
		      label: 'N/A',
		      cards: [
		      	{id: 'Card1', title: 'Cris', description: 'BrOliC BoY1', label: 'Admin'},
		        {id: 'Card2', title: 'Ismail', description: 'BrOliC BoY2', label: 'Member'}]
		    },
		  ]
	}
	

  render() {
    return (
    	<div>
    	<Nav/>
    	<Board 
    		data={this.state} 
    		draggable
    		style={{backgroundColor: 'white'}}
    		/>
    		</div>
    		)
  }
}