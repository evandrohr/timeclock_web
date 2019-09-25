  import React, { Component } from 'react';
  import Row from 'react-bootstrap/Row';
  import Col from 'react-bootstrap/Col';
  import List from './list/List';
  import { getToken, getCurrentUserId, getCurrentUserName } from "../../services/auth";

   
   class Events extends Component {

    constructor(props) {
      super(props);
      this.state = {
        events: []
      };
      this.loadEvents = this.loadEvents.bind(this);
    };
    
    async loadEvents() {
      let token = getToken()
      const requestInfo = {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }),
      };
      let response = await fetch(`http://localhost:3000/api/v1/users/${getCurrentUserId()}/clock_events/`, requestInfo);
      const events = await response.json();
      this.setState({ events: events });
    }

    componentDidMount() {
      this.loadEvents();
    }

     render() {
       return (
         <Row>
           <Col xs={{ span: 8, offset: 2 }} className="events_list">
             <p className="title">Events</p>
             <List loadEvents={this.loadEvents} events={this.state.events}/>
           </Col>
         </Row>
       );
     }
   }
   
   export default Events;