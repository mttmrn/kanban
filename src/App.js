import React, { Component } from "react";
import "./App.css";
import fire from "./config/auth.js";
import Home from "./home";
import Login from "./login";
import Column from "./components/column";
import "./scss/style.scss";

class App extends Component {
  state = {
    user: "user",
    columns: []
  };

  componentDidMount = () => {
    this.authListener();
  };

  authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
        localStorage.setItem("user", user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
      }
    });
  };

  addColumn = () => {
    this.setState({
      columns: [...this.state.columns, <Column />]
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.user ? (
          <Home addColumn={this.addColumn} columns={this.state.columns} />
        ) : (
          <Login />
        )}
      </div>
    );
  }
}

export default App;
