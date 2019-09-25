import React, { useState } from "react";
   import Modal from 'react-bootstrap/Modal';
   import Button from 'react-bootstrap/Button';
   import Form from 'react-bootstrap/Form';
   import { getToken,getCurrentUserId } from "../../../services/auth";
   
   function CreateEvent(props) {
     const [type_evt, setTypeEvt] = useState('clock_in');
     const [show, setShow] = useState('');

     const handleSubmit = (async e => {
      e.preventDefault();
       await fetch(`http://18.222.159.99:80/api/v1/users/${getCurrentUserId()}/clock_events/`,
         {
           method: 'POST',
           headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json',
             'Authorization': `Bearer ${getToken()}`
           },
           body: JSON.stringify({
             clock_event: { event_time: new Date(), type_evt: type_evt  , user_id: getCurrentUserId()} 
           })
         }
       )
       setShow(false)
       setTypeEvt('0')
       props.loadEvents();
     });
   
     return (
       <div>
         <Button onClick={e => setShow(true)} variant="dark" className="float-up create_event_btn">New Clock Event</Button>
   
         <Modal show={show || false} onHide={e => setShow(false)}>
           <Modal.Header closeButton>
             <Modal.Title>New Clock Event</Modal.Title>
           </Modal.Header>
           <Modal.Body>
           <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Event Type</Form.Label>
              <Form.Control as="select" onChange={e => setTypeEvt(e.target.value)}>
                <option value="clock_in">Clock In</option>
                <option value="clock_out">Clock Out</option>
              </Form.Control>
            </Form.Group>
             {/* <Form.Control type="email" placeholder="0 ou 1" value={type_evt || ''} onChange={e => setTypeEvt(e.target.value)} /> */}
           </Modal.Body>
           <Modal.Footer>
             <Button variant="secondary" onClick={e => setShow(false)}>
               Close
             </Button>
             <form onSubmit={handleSubmit}>
               <Button variant="dark" type="submit">
                 Create
               </Button>
             </form>
           </Modal.Footer>
         </Modal>
       </div>
     );
   }
   
   export default CreateEvent;