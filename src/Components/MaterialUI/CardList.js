import React from 'react'
import Card from './Cards.js'

const CardList = ({cards}) =>{

	
	return(
		<div >
			{
				cards.map((user, i) => {
					return (<Card 
							key = {i}
							 user = {user}
							/>		
					);
				})
			};
		</div>


	)
}


export default CardList;