import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";



class App extends Component {
  constructor() {
    super();
      this.state ={
        inputUser: ''
      }
  }
  handleChange = (event) => {
      this.setState({inputUser: event.target.value})
  }



  render() {
    return (
      <div className="App">
        <input onChange={this.handleChange} value ={this.state.inputUser}
          
          />
        <ul>
          <p>{this.state.inputUser}</p>
        </ul>
      </div>
    );
  }
}

export default App;
