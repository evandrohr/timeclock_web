import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import api from "../../services/api";
import { login, setCurrentUserId, setCurrentUserName } from "../../services/auth";

import '../../App.scss';
import Header from '../../components/header/Header';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckCircle, faTrashAlt } from '@fortawesome/free-regular-svg-icons'
   
library.add(faCheckCircle, faTrashAlt)


// import { Form, Container } from "./styles";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "All fields required!" });
    } else {
      try {
        const response = await api.post("/authenticate", { email, password });
        login(response.data.auth_token);
        setCurrentUserId(response.data.user_id);
        setCurrentUserName(response.data.user_name);
        this.props.history.push("/dashboard");
      } catch (err) {
        this.setState({
          error:
            "Username or Password is incorrect!"
        });
      }
    }
  };

  render() {
    return (
      <div>
        <div>
          <Header/>
        </div>
        <Container>
        <form onSubmit={this.handleSignIn}>
          {this.state.error && <p>{this.state.error}</p>}
          <Row>
            <Col>
              <input
                type="email"
                placeholder="Email"
                onChange={e => this.setState({ email: e.target.value })}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <input
                type="password"
                placeholder="Password"
                onChange={e => this.setState({ password: e.target.value })}
              />
            </Col>  
          </Row>
          <Row>
            <Col>
            <button type="submit">Submit</button>
            </Col>
          </Row>
          <hr />
          {/* <Link to="/signup">Sign Up</Link> */}
        </form>
        </Container>
      </div>
    );
  }
}

export default withRouter(SignIn);