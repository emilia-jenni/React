import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    counter: 0,
  };

  addHandler = () => {
    console.log("adding works");
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  removeHandler = () => {
    console.log("remove works");
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  resetHandler = () => {
    console.log("reset works");
    this.setState({
      counter: 0,
    });
  };

  render() {
    return (
      <div>
        <h1 className="circle">{this.state.counter}</h1>
        <button onClick={this.addHandler}>Add one</button>
        <button onClick={this.removeHandler}>Remove one</button>
        <button onClick={this.resetHandler}>Reset</button>
      </div>
    );
  }
}

export default App;
