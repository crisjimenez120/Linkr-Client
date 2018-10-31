import React, { Component } from "react";
import Calendar from "react-big-calendar";
import GroupTable from "../MaterialUI/GroupTable.js"
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
//import events from './events.js'

const localizer = Calendar.momentLocalizer(moment);

class myCalendar extends Component {

  constructor(props) {
    super(props)
    this.state = 
    {
      events: [
      {
        id: 0,
        title: 'All Day Event very long title',
        allDay: true,
        start: new Date(2018, 10, 28),
        end: new Date(2018, 10, 28),
      },
      {
        id: 1,
        title: 'Long Event',
        start: new Date(2018, 10, 7),
        end: new Date(2018, 10, 7),
      },

      {
        id: 2,
        title: 'DTS STARTS',
        start: new Date(2016, 2, 13, 0, 0, 0),
        end: new Date(2016, 2, 13, 0, 0, 0),
      },
      {
        id: 3,
        title: 'DTS ENDS',
        start: new Date(2016, 10, 6, 0, 0, 0),
        end: new Date(2016, 10, 6, 0, 0, 0),
      },

      {
        id: 4,
        title: 'Some Event',
        start: new Date(2018, 10, 9, 0, 0, 0),
        end: new Date(2018, 10, 9, 0, 0, 0),
        hexColor: 'F0FF00',
      },
      {
        id: 5,
        title: 'Conference',
        start: new Date(2018, 10, 13),
        end: new Date(2018, 10, 13),
        desc: 'Big conference for important people',
        hexColor: 'FF0000',
      },
      {
        id: 6,
        title: 'Meeting',
        start: new Date(2018, 10, 12, 10, 30),
        end: new Date(2018, 10, 12, 12, 30),
        desc: 'Pre-meeting meeting, to prepare for the meeting',
        hexColor: 'FF0000',

      },
      {
        id: 7,
        title: 'Lunch',
        start: new Date(2018, 10, 12, 12, 0, 0, 0),
        end: new Date(2018, 10, 12, 13, 0, 0, 0),
        desc: 'Power lunch',
        hexColor: 'F0FF00',
      },
      {
        id: 8,
        title: 'Meeting',
        start: new Date(2018, 10, 12, 14, 0, 0, 0),
        end: new Date(2018, 10, 12, 15, 0, 0, 0),
         hexColor: 'FF0000',
      },
      {
        id: 9,
        title: 'Happy Hour',
        start: new Date(2018, 10, 12, 17, 0, 0, 0),
        end: new Date(2018, 10, 12, 17, 30, 0, 0),
        desc: 'Most important meal of the day',
        hexColor: '90ee90',
      },
      {
        id: 10,
        title: 'Dinner',
        start: new Date(2018, 10, 12, 20, 0, 0, 0),
        end: new Date(2018, 10, 12, 21, 0, 0, 0),
        hexColor: 'F0FF00',
      },
      {
        id: 11,
        title: 'Birthday Party',
        start: new Date(2018, 10, 13, 7, 0, 0),
        end: new Date(2018, 10, 13, 10, 30, 0),
        hexColor: '90ee90',
      },
      {
        id: 12,
        title: 'Late Night Event',
        start: new Date(2018, 10, 17, 1, 30, 0),
        end: new Date(2018, 10, 17, 2, 30, 0),
        hexColor: 'F0FF00',
      },
      {
        id: 12.5,
        title: 'Late Same Night Event',
        start: new Date(2018, 10, 17, 19, 30, 0),
        end: new Date(2018, 10, 17, 23, 30, 0),
      },
      {
        id: 13,
        title: 'Multi-day Event',
        start: new Date(2018, 10, 20, 19, 30, 0),
        end: new Date(2018, 10, 23, 2, 0, 0),
        hexColor: '90ee90',
      },
      {
        id: 14,
        title: 'Today',
        start: new Date(new Date().setHours(new Date().getHours() - 10)),
        end: new Date(new Date().setHours(new Date().getHours() + 10)),
        hexColor: '90ee90',
      }],
    }
  }
    

  // componentDidMount(){
  //     fetch('/events').then( res => res.json())
  //                    .then( events => this.setState({ events }))
  //                    .then(this.setState(
                        

  //                     ))
                     
  //   }



    
      
    

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

  

  render() {
    return (

      <div className="App" style={{display: "flex"}}>
        <Calendar
          selectable
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