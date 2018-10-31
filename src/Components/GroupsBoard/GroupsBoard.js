import React from 'react'
import Board from 'react-trello'

 

 const users = [
			{id: 'Card1', title: 'Cris', description: 'BrOliC BoY1', label: 'Admin'},
		    {id: 'Card2', title: 'Ismail', description: 'BrOliC BoY2', label: 'Member'},
		    {id: 'Card3', title: 'Saif', description: 'BrOliC BoY3', label: 'Member'},
		    {id: 'Card4', title: 'EddyG', description: 'BrOliC BoY4', label: 'Member'}
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
		      	{id: 'Card1', title: 'Cris', description: 'BrOliC BoY1', label: 'Admin'},
		        {id: 'Card2', title: 'Ismail', description: 'BrOliC BoY2', label: 'Member'},
		        {id: 'Card4', title: 'EddyG', description: 'BrOliC BoY4', label: 'Member'}]
		    },
		    {
		      id: 'lane3',
		      title: 'PowerPuff Girls',
		      label: 'N/A',
		      cards: [
		      	{id: 'Card1', title: 'Cris', description: 'BrOliC BoY1', label: 'Admin'},
		        {id: 'Card3', title: 'Saif', description: 'BrOliC BoY3', label: 'Member'},
		        {id: 'Card4', title: 'EddyG', description: 'BrOliC BoY4', label: 'Member'}]
		    },
		  ]
	}
	

  render() {
    return <Board 
    		data={this.state} 
    		draggable
    		style={{backgroundColor: 'white'}}
    		/>
  }
}