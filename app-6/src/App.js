import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from './Todo'

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputUser: '',
      list: []

    }
  }

  handlerChange = (event) => {
     this.setState({inputUser: event.target.value})
  }

 handlerClick = () => {
   this.setState({list: [...this.state.list, this.state.inputUser], inputUser: '' })
 }


  render() {
    let list = this.state.list.map((el,index) => {
      return <Todo key={index} task={el} />
    })
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input onChange={this.handlerChange} 
        placeholder="Enter new task"
        />
        <button onClick={this.handlerClick}>Add</button>

        {list}
      </div>
    );
  }
}

export default App;
