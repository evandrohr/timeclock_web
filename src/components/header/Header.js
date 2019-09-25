import React, { Component } from 'react';
   import Navbar from 'react-bootstrap/Navbar';
   import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
   
   class Header extends Component {
     render() {
       return (
         <div>
           <Navbar>
             <Navbar.Brand>
               <FontAwesomeIcon icon="check-circle" size="lg"/> Time Clock
             </Navbar.Brand>
           </Navbar>
           <br></br>
         </div>
       );
     }
   }
   
   export default Header;