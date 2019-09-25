import React, { useState } from "react";
   import Modal from 'react-bootstrap/Modal';
   import Button from 'react-bootstrap/Button';
   import Form from 'react-bootstrap/Form';
   import { getToken } from "../../../services/auth";
   
   function CreateEvent(props) {
     const [title, setTitle] = useState('');
     const [show, setShow] = useState('');
   
     const handleSubmit = (async () => {
       await fetch(`http://localhost:3001/api/v1/users/`,
         {
           method: 'POST',
           headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json',
             'Authorization': `Bearer ${getToken()}`
           },
           body: JSON.stringify({
             task: { title: title, done: false} 
           })
         }
       )
       setShow(false)
       setTitle('')
       props.loadTasks();
     });
   
     return (
       <div>
         <Button onClick={e => setShow(true)} variant="dark" className="float-right create_task_btn">+ Tasks</Button>
   
         <Modal show={show || false} onHide={e => setShow(false)}>
           <Modal.Header closeButton>
             <Modal.Title>New Task</Modal.Title>
           </Modal.Header>
           <Modal.Body>
             <Form.Control type="email" placeholder="Enter with your task..." value={title || ''} onChange={e => setTitle(e.target.value)} />
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
   
   export default CreateTask;