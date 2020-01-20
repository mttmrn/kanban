import React, { Component } from "react";
import fire from "./config/auth";
import db from "./config/db";

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    localStorage.setItem("email", this.state.email);
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch(err => console.log(err));
  }

  signup(e) {
    e.preventDefault();
    localStorage.setItem("email", this.state.email);
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(data => {
        db.collection("users")
          .doc(this.state.email)
          .set({
            email: this.state.email,
            id: data.user.uid,
            columns: {},
            columnItems: []
          })
          .then(function() {
            console.log("Document successfully written!");
          })
          .catch(function(error) {
            console.error("Error writing document: ", error);
          });
      });
  }
  render() {
    return (
      <div className="bg">
        <form>
          <label>Email address</label>
          <input
            value={this.state.email}
            onChange={this.handleChange}
            type="email"
            name="email"
            id="exampleInputEmail1"
            placeholder="Enter email"
          />
          <label>Password</label>
          <input
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
            name="password"
            id="exampleInputPassword1"
            placeholder="Password"
          />
          <button type="submit" onClick={this.login}>
            Login
          </button>
          <button onClick={this.signup}>Signup</button>
        </form>
      </div>
    );
  }
}
export default Login;
