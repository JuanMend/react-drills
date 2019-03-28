import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";


let food = ['spaghetti','ice cream', 'sushi', 'bologna','cheese'];

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      food: food
    }
  }
   handlerChange = (event) => {
     this.setState({userInput: event.target.value})
   }

  render() {
    let foods = this.state.food.filter((el,index) =>{
      return el.includes(this.state.userInput);
    })
    .map((el,index) => {
      return <h2 key={index}>{el}</h2>
    })
    return (
      <div className="App">
        <input onChange={this.handlerChange}
        
        />
        {foods}
        
      </div>
    );
  }
}

export default App;
