import React, {Component} from 'react'
import UserDetails from './UserDetails'
import EventForm from './EventForm'
import Confirm from './Confirm'

import Nav from '../MaterialUI/Nav.js';

export class Form extends Component{
	state ={
		step: 1,
		firstName: '',
		lastName: '',
		eventTitle: '',
		eventDescription: '',
		eventDateStart: '',
		eventDateEnd: '',
		eventColor: ''
	}
	//go to next step in the form
	nextStep = () =>{
		const {step} = this.state;
		this.setState({
			step: step + 1
		})
	}

	//go to previous step in the form
	prevStep = () =>{
		const {step} = this.state;
		this.setState({
			step: step - 1
		})
	}


	//handle field change
	handleChange = input => e =>{
		this.setState({
			[input]: e.target.value
		});
	}

	render(){
		const { step } = this.state;
		const { firstName, lastName, eventTitle, eventDescription,
				 eventDateStart, eventDateEnd, eventColor} = this.state;
		const values ={ firstName, lastName, eventTitle, eventDescription,
				 eventDateStart, eventDateEnd, eventColor}

		switch (step){
			default:
				return(
					<h1> Error </h1>
					)
			case 1:
				return(
					<div>
					<Nav/>
					<UserDetails
						nextStep = {this.nextStep}
						handleChange = {this.handleChange}
						values = {values}
					/>
					</div>
				)
			case 2:
				return(
					<div>
					<Nav/>
					<EventForm
						nextStep = {this.nextStep}
						prevStep = {this.prevStep}
						handleChange = {this.handleChange}
						values = {values}
					/>
					</div>
				)
			case 3:
				return(
					<div>
					<Nav/>
					<Confirm
						nextStep = {this.nextStep}
						prevStep = {this.prevStep}
						values = {values}
					/>
					</div>
				)
			case 4:
				return(
					<h1> Success </h1>
				)
		}
	}
}

export default Form;