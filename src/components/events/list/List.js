import React, { Component } from 'react';
   import Row from 'react-bootstrap/Row';
   import Card from 'react-bootstrap/Card';
   import Table from 'react-bootstrap/Table';
   import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
   import { getToken } from "../../../services/auth";
   
   class List extends Component {
    async deleteEvent(event) {
      const requestInfo = {
        method: 'DELETE',
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getToken()}`
        }),
      };
      if (window.confirm(`Are you sure you want to delete: "${event.event_time}"`)) {
        await fetch(`http://localhost:3000/api/v1/users/${event.user_id}/clock_events/${event.id}`, requestInfo);
        this.props.loadEvents();
      }
    }

     render() {
       return (
         <div>
           <Card>
             <Card.Body>
             <Table responsive>
               <tbody>
                 {this.props.events.map((event, index) => {
                   return <tr key={event.id}>
                     <td className="col-md-3">{event.event_time}</td>
                     <td className="col-md-3">{event.type_evt}</td>
                     <td>
                       <a className="edit" href="#">
                         <FontAwesomeIcon icon="trash-alt"/>
                       </a>
                     </td>
                     <td>
                       <a className="delete" href="#" onClick={() => this.deleteEvent(event)}>
                         <FontAwesomeIcon icon="trash-alt"/>
                       </a>
                     </td>
                   </tr>;
                 })}
               </tbody>
             </Table>
             </Card.Body>
           </Card>
         </div>
       );
     }
   }
   
   export default List;