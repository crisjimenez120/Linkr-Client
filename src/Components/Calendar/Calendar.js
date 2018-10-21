import React, { Component } from "react";
import Calendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = Calendar.momentLocalizer(moment);

class myCalendar extends Component {
  state = {
    events: [
      {
        start: new Date(),
        end: new Date(moment().add(1, "days")),
        title: "1 title"

      },
      {
        start: new Date(),
        end: new Date(moment().add(5, "days")),
        title: "5 title"
      },
      {
        start: new Date(),
        end: new Date(moment().add(3, "days")),
        title: "3 title",
        hexColor: '90ee90'
      }
    ]
  };
  eventStyleGetter = (event, start, end, isSelected) =>{
    console.log(event);
    var backgroundColor = '#' + event.hexColor;
    var style = {
        backgroundColor: backgroundColor,
        borderRadius: '0px',
        opacity: 0.8,
        color: 'black',
        border: '0px',
        display: 'block'
    };
    return {
        style: style
    };
	}


  render() {
    return (
      <div className="App" >
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          style={{ height: "90vh", width: "55vw"}}
          eventPropGetter={(this.eventStyleGetter)}
  		  
        />
      </div>
    );
  }
}

export default myCalendar;