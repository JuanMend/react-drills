import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

let food = ['spaghetti','ice cream', 'sushi', 'bologna','cheese'];
  
class App extends Component {
  constructor() {
    super();
    this.state = {

      food: food
    }
  }


  render() {
    return (
      <div className="App">
         <ul>
           {this.state.food.map(function(el) {
             return <h2>{el}</h2>
           })}
         </ul>
      </div>
    );
  }
}

export default App;
