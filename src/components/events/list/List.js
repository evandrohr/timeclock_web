import React, { Component } from 'react';
   import Card from 'react-bootstrap/Card';
   import Table from 'react-bootstrap/Table';
   import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
   import Moment from 'moment';

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
        await fetch(`http://18.222.159.99:80/api/v1/users/${event.user_id}/clock_events/${event.id}`, requestInfo);
        this.props.loadEvents();
      }
    }

    async editEvent(event) {

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
                     <td className="col-md-3">{Moment(event.event_time).format('MM/DD/YYYY hh:mm:ss')}</td>
                     <td className="col-md-3">{event.type_evt}</td>
                     <td>
                       <a className="edit" href="#" onClick={() => this.editEvent(event)}>
                         <FontAwesomeIcon icon="edit"/>
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