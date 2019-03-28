import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from './Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAc2wD5KZs6IbjTPzL1GvrmOrCB2lVr_58vIz_p3cGiCaekGrqMQ"}/>
      </div>
    );
  }
}

export default App;
