import React, { Component } from "react";
import Calendar from "react-big-calendar";
import GroupTable from "../MaterialUI/GroupTable.js"
import Nav from '../MaterialUI/Nav.js';
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import { Spring, Transition, animated } from 'react-spring';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';

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

let selectColor = (n) => {
  // Color array    blue,     red      green,        pink, purple, orange,
  var colors = ["3300CC", "D00000", "006633", "FF66FF", "9900CC", '4286f4', 'f49841'];
  return colors[n % colors.length];
}
 


let tempEvents = [];
let tempGroups = [];
let tempGroupEvents = [];

let parseEvents = (Events) => {
      Events.map(event => {
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
      group: '',
      events: [],
      groupEvents: [],
      groups: [],
      showGroupEvents: true
    }
  }
    
 
  getUserGroups(){
      console.log("getUserGroups")
      tempGroups = [];

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
        .then(console.log(tempGroups))
             
  }

  //so here we are just waiting for the stack to finish executing to parse the tempevent
  componentDidMount(){
    console.log("mounting")
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
    setTimeout (() => {
      parseEvents(tempEvents);
      parseEvents(tempGroupEvents);
      this.setState({
        events : tempEvents,
        groups : tempGroups,
      })
      console.log(tempGroupEvents);
    })
  }

  eventStyleGetter = (event) =>{
    console.log(event.id);

    var backgroundColor = '#' + selectColor(event.id);
    var style = {
        backgroundColor: backgroundColor,
        borderRadius: '10px',
        opacity: 0.8,
        color: 'white',
        border: '0px',
        display: 'block',

    };
    return {
        style: style
    };
	}


  onAddGroup = () =>{
    this.getUserGroups();
    setTimeout(() => {this.setState({
                        groups : tempGroups,
                      }) 
                    },100) 
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
            user_email: this.props.user.email,
            user_name: this.props.user.name
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

  getGroupEvents = id => {
        tempGroupEvents = [];
        fetch('/groups/api_get_all_events_for_group', {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({
              group_id: id,
            }),
          })
           .then( res => res.json())
           //.then( res => console.log(res))
           .then( events => {
                    for(let i = 0; i < events.length; i++){
                      events[i].title = `${events[i].user_name}:  ${events[i].title}`
                      tempGroupEvents.push(events[i])
                    }
                  parseEvents(tempGroupEvents);
                })
        this.updateGroupEvents(tempGroupEvents, id);
  }

  updateGroupEvents(tempGroupEvents, id){
      let groupName = '';
      for(let i = 0; i < this.state.groups.length; i++){
        if(this.state.groups[i].group_id == id){
          groupName = this.state.groups[i].group_name;
        }
      }
      this.setState({
          groupEvents : tempGroupEvents,
          group: groupName
      })
  }
  onToggleCalendar = () =>{
    //this.getGroupEvents(id);
    // setTimeout (() => {
    //   parseEvents(tempGroupEvents);
       this.setState({
        showGroupEvents: !this.state.showGroupEvents,
    //     groupEvents : tempGroupEvents,
       });
    // })
  }
  

  onSelectGroup = id =>{
      console.log("GROUP " + id);

      this.getGroupEvents(id);
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
    if(this.props.user.id == 0){
      return <Redirect to ='/'/> 
    }

    return (
     <div>

          <Nav user = {this.props.user.name} toggle = {this.state.showGroupEvents} group ={this.state.group} unloadUser = {this.props.unloadUser}/> 
            
            <div className="App" style={{display: "flex"}}>

            <Transition
              native
              force
              config={{ tension: 180, friction: 12 }}
              items={this.state.showGroupEvents}
              from={{transform: 'rotateY(-180deg)',opacity: '0'}}
              enter={{ transform: 'rotateY(0deg)',opacity: '1'}}
              leave={{ position: 'absolute', transform: 'rotateY(-180deg)', opacity: '0'}}>
              {toggle =>
                toggle
                  ? props => 
                  <animated.div style = {props}>
                    <DragAndDropCalendar
                      selectable
                      localizer={localizer}
                      defaultDate={new Date()}
                      events={this.state.events}
                      resizable
                      defaultView = 'week'
                      onEventResize={this.onEventResize}
                      style={{ height: "80vh", width: "55vw", margin: 10}}
                      onSelectEvent={event => alert( event.title)}
                      onSelectSlot={this.handleSelect}
                    /></animated.div>
                  : props => 
                  <animated.div style = {props}>
                    <DragAndDropCalendar
                      selectable
                      localizer={localizer}
                      defaultDate={new Date()}
                      events={this.state.groupEvents}
                      resizable
                      defaultView = 'week'
                      onEventResize={this.onEventResize}
                      eventPropGetter={(this.eventStyleGetter)}
                      style={{ height: "80vh", width: "55vw", margin: 10}}
                      onSelectEvent={event => alert( `${event.title}
start:${event.start} 
end:${event.end} `)}
                      onSelectSlot={this.handleSelect}
                    /></animated.div>}
            </Transition>
            <div>
              <GroupTable groups = {this.state.groups} user = {this.props.user} onSelectGroup = {this.onSelectGroup} addGroup = {this.onAddGroup}/>
            </div>
           
              

            </div>

            
            <Button  size="small" color="primary" onClick = {() => {this.onToggleCalendar()}} >Toggle</Button>


            
        </div>

    );
  }
}

export default myCalendar;