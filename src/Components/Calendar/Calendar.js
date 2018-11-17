import React, { Component } from "react";
import Calendar from "react-big-calendar";
import GroupTable from "../MaterialUI/GroupTable.js"
import Nav from '../MaterialUI/Nav.js';
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = Calendar.momentLocalizer(moment);
// takes the JSON date formate and convert into a Date Object
const dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/;

function reviver(key, value) {

    if (typeof value === "string" && dateFormat.test(value)) {
        return new Date(value);
    }

    return value;
}

 



let tempEvents = [

      // {
       
      //   title: 'Grinding Levels on Pidgeys',
      //   start: new Date(2018, 10, 13, 0 , 0, 0),
      //   end: new Date(2018, 10, 13, 23, 59, 59),
      // },
      // {
        
      //   title: 'Beat All The Gyms',
      //   start: new Date(2018, 10, 15, 3, 0, 0),
      //   end: new Date(2018, 10, 15, 6, 0, 0),
      // }
      ];

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
    }
  }
    
  //Every time the component mounts we are pushing event event into a temp event array
  componentWillMount(){
      fetch('/events').then( res => res.json())
                      //.then( res => console.log(res))
                      .then( event => {for(let i = 0; i < event.length; i++){tempEvents.push(event[i])}})
                      
  }

  //so here we are just waiting for the stack to finish executing to parse the tempevent
  componentDidMount(){
    setTimeout (() => {
      parseEvents(tempEvents);
      this.setState({
        events : tempEvents
      })
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



  // handleSelect = ({ start, end }) => {
  //   const title = window.prompt('Event name')
  //   if (title)
  //     this.setState({
  //       events: [
  //         ...this.state.events,
  //         {
  //           title: title,
  //           start: start,
  //           end: end,
  //         },
  //       ],
  //     })
  //   console.log(JSON.stringify(this.state.events));
  // }

  handleSelect = ({ start, end }) => {
      // make a POST request to the backend
      const title = window.prompt('Event name')
       if (title){
        fetch('/api/event', {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          headers: {
              "Content-Type": "application/json; charset=utf-8",
              // "Content-Type": "application/x-www-form-urlencoded",
          },
          body: JSON.stringify({
            title: title,
            start: start,
            end: end,
          }),
        })//.then(res=>res.json())
          .then(res => console.log(res));
    }
  }

  render() {
    return (
     <div>
          <Nav/>
          <div className="App" style={{display: "flex"}}>
       
        <Calendar
          selectable
          localizer={localizer}
          defaultDate={new Date(2018, 10, 17)}
          defaultView="month"
          events={this.state.events}
          style={{ height: "80vh", width: "55vw", margin: 10}}
          eventPropGetter={(this.eventStyleGetter)}
          onSelectEvent={event => alert( event.title)}
          onSelectSlot={this.handleSelect}
        />

       <GroupTable />
        

      </div>
        </div>

    );
  }
}

export default myCalendar;