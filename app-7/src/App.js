import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from './Todo'
import NewTask from './NewTask'
import List from './List' 

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    }
  }

  handleTask = (task) => {
    this.setState({
      list: [...this.state.list, task]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask add={this.handleTask} />
        <List tasks={this.state.list} />
      </div>
    );
  }
}

export default App;
