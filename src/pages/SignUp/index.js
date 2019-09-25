import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import Logo from "../../assets/logo.svg"
import api from "../../services/api";

class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirm_password: "",
    error: ""
  };

  handleSignUp = async e => {
    e.preventDefault();
    const { username, email, password, confirm_password } = this.state;
    if (!username || !email || !password || !confirm_password) {
      this.setState({ error: "All fields are required!" });
    } else {
      try {
        await api.post("/users", { username, email, password, confirm_password });
        this.props.history.push("/");
      } catch (err) {
        console.log(err);
        this.setState({ error: "Error registering your account" });
      }
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSignUp}>
          <img src={Logo} alt="Logo" />
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder="Name"
            onChange={e => this.setState({ username: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={e => this.setState({ confirm_password: e.target.value })}
          />
          <button type="submit">Sign Up</button>
          <hr />
          <Link to="/">login</Link>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUp);