import React, { Component } from "react";
import Calendar from "react-big-calendar";
import GroupTable from "../MaterialUI/GroupTable.js"
import Nav from '../MaterialUI/Nav.js';
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
//import Button from '@material-ui/core/Button';
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";

const DragAndDropCalendar = withDragAndDrop(Calendar);

const localizer = Calendar.momentLocalizer(moment);
// takes the JSON date formate and convert into a Date Object
const dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/;

function reviver(key, value) {

    if (typeof value === "string" && dateFormat.test(value)) {
        return new Date(value);
    }

    return value;
}

 



let tempEvents = [];
let tempGroups = [];

let parseEvents = (tempEvents) =>{
      tempEvents.map(event => {
        let startTemp = event.start.substring(0, 19);
        startTemp += 'Z'
        const startText = `{ "start": "${startTemp}" }`;
        const startDate = JSON.parse(startText, reviver);
        
        let endTemp = event.end.substring(0, 19);
        endTemp += 'Z';
        const endText = `{ "end": "${endTemp}" }`;
        const endDate = JSON.parse(endText, reviver);

        event.start = startDate.start;
        event.end = endDate.end;
      }) 
  }

 

class myCalendar extends Component {

  constructor(props) {
    super(props)
    this.state = 
    {
      events: [],
      groups: []
    }
  }
    
  //Every time the component mounts we are pushing event event into a temp event array
  componentWillMount(){
      fetch('/events/api_events', {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          headers: {
              "Content-Type": "application/json; charset=utf-8",
              // "Content-Type": "application/x-www-form-urlencoded",
          },
          body: JSON.stringify({
            user_email: this.props.user.email
          }),
        }).then( res => res.json())
                      //.then( res => console.log(res))
          .then( event => {for(let i = 0; i < event.length; i++){tempEvents.push(event[i])}})
          this.getUserGroups()
              
   }
  getUserGroups(){
      fetch('/groups/api_all_groups_single_user', {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          headers: {
              "Content-Type": "application/json; charset=utf-8",
              // "Content-Type": "application/x-www-form-urlencoded",
          },
          body: JSON.stringify({
            user_email: this.props.user.email
          }),
        }).then( res => res.json())
        //.then( groups => console.log(groups))
        .then(groups => {for(let i = 0; i < groups.length; i++){tempGroups.push(groups[i])}})
                      
  }

  //so here we are just waiting for the stack to finish executing to parse the tempevent
  componentDidMount(){
    setTimeout (() => {
      parseEvents(tempEvents);
      this.setState({
        events : tempEvents,
        groups : tempGroups
      })
      console.log(tempGroups);
    })
  }

    
      
    

  eventStyleGetter = (event, start, end, isSelected) =>{
    
    var backgroundColor = '#' + event.hexColor;
    var style = {
        backgroundColor: backgroundColor,
        borderRadius: '0px',
        opacity: 0.8,
        color: 'black',
        border: '0px',
        display: 'block',

    };
    return {
        style: style
    };
	}





  handleSelect = ({ start, end }) => {
      // make a POST request to the backend
      const title = window.prompt('Event name')
       if (title){
        fetch('/events/api_create_event', {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          headers: {
              "Content-Type": "application/json; charset=utf-8",
          },
          body: JSON.stringify({
            title: title,
            start: start,
            end: end,
            user_email: this.props.user.email
          }),
        })//.then(res=>res.json())
          .then(res => console.log(res));
        this.setState({
        events: [
          ...this.state.events,
          {
            start,
            end,
            title,
          },
        ],
      })
    }
  }

  onEventResize = ({ event, start, end }) => {
    const { events } = this.state

    const nextEvents = events.map(existingEvent => {
      return existingEvent.id === event.id
        ? { ...existingEvent, start, end }
        : existingEvent
    })

    this.setState({
      events: nextEvents,
    })

    fetch('/events/api_update_event', {
          method: "PUT", // *GET, POST, PUT, DELETE, etc.
          headers: {
              "Content-Type": "application/json; charset=utf-8",
          },
          body: JSON.stringify({
            title: event.title,
            start: start,
            end: end,
            id: event.id
          }),
        })
  }


  render() {
    return (
     <div>
          <Nav user = {this.props.user}/>
            <div className="App" style={{display: "flex"}}>
            
            <DragAndDropCalendar
              selectable
              localizer={localizer}
              defaultDate={new Date(2018, 10, 17)}
              defaultView="month"
              events={this.state.events}
              resizable
              onEventResize={this.onEventResize}
              style={{ height: "80vh", width: "55vw", margin: 10}}
              eventPropGetter={(this.eventStyleGetter)}
              onSelectEvent={event => alert( event.title)}
              onSelectSlot={this.handleSelect}
            />

           <GroupTable groups = {this.state.groups} user = {this.props.user}/>
            

            </div>
            
        </div>

    );
  }
}

export default myCalendar;