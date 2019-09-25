import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import '../../App.scss';
import Header from '../../components/header/Header';
import Events from '../../components/events/Events';

import Logo from "../../assets/logo.svg";
import api from "../../services/api";
import { logout, getCurrentUserId, getCurrentUserName } from "../../services/auth";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckCircle, faTrashAlt, faEdit } from '@fortawesome/free-regular-svg-icons'

library.add(faCheckCircle, faTrashAlt, faEdit)

class Dashboard extends Component {
  state = {
    username: "",
    clock_state: "",
    events: []
  };

  handleSignOut = () => {
      logout()
      this.props.history.push("/");
    };

    // handleClockPress = async e => {
    //   e.preventDefault();
    //   const { email, password } = this.state;
    //   if (!email || !password) {
    //     this.setState({ error: "All fields required!" });
    //   } else {
    //     try {
    //       const response = await api.post("/authenticate", { email, password });
    //       login(response.data.token);
    //       this.props.history.push("/dashboard");
    //     } catch (err) {
    //       this.setState({
    //         error:
    //           "Username or Password is incorrect!"
    //       });
    //     }
    //   }
    // };

  render() {
    return(
    <div>
        <Header/>
        <button onClick= {this.handleSignOut} className="float-right create_event_btn" >Logout</button>
        
      <Container>
        <h1>{getCurrentUserName()}</h1>
      </Container>
      <Container>
          <Events/>
      </Container>

    </div>
    );
  };
};

export default withRouter(Dashboard);