import React, { Component } from "react";
import Calendar from "react-big-calendar";
import GroupTable from "../MaterialUI/GroupTable.js"
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = Calendar.momentLocalizer(moment);

class myCalendar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      events: [
      {
        start: new Date(),
        end: new Date(moment().add(1, "days")),
        title: "1 Day Event"

      },
      {
        start: new Date(),
        end: new Date(moment().add(5, "days")),
        title: "5 Day event"
      },
      {
        start: new Date(),
        end: new Date(moment().add(3, "days")),
        title: "3 Day event",
        hexColor: '90ee90'
      }
    ]
    }
  }

  eventStyleGetter = (event, start, end, isSelected) =>{
    console.log(event);
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

  render() {
    return (

      <div className="App" style={{display: "flex"}}>
      
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="week"
          events={this.state.events}
          style={{ height: "80vh", width: "55vw", margin: 10}}
          eventPropGetter={(this.eventStyleGetter)}
  		  
        />
        <GroupTable style={{ width: "30vw"}}/>
        

      </div>
    );
  }
}

export default myCalendar;