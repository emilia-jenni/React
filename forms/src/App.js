import React, { Component } from "react";

import Form from "./Components/Form";
import Popup from "./Components/View";
import View from "./Components/View";

class App extends Component {
  state = {
    firstname: "",
    lastname: "",
    number: "",
    email: "",
    role: "",
    message: "",
  };

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Form />
        <Popup />
        <View />
      </div>
    );
  }
}

export default App;
