import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      userPass: ''
    }
  }

  handlerChange = (event) => {
    this.setState({userName: event.target.value})
  }
  handlerPass = (event) => {
    this.setState({userPass: event.target.value})
  }

  handlerLogin = () => {
    alert(`Username: ${this.state.userName} Password: ${this.state.userPass}`)
  }

   render() {
    return (
      <div className="App">
        <input onChange={this.handlerChange} value={this.state.userName}/>
        <input onChange={this.handlerPass} value={this.state.userPass}  />
        <button onClick={this.handlerLogin}> Login </button> 
      </div>
    );
  }
}

export default App;
