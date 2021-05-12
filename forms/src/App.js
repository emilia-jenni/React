import React, { Component } from "react";

import Form from "./Components/Form";
import Popup from "./Components/View";
import View from "./Components/View";
import NotesList from "./Components/NotesList";

class App extends Component {
  state = {
    notes: [],
    inputData: {
      firstname: "",
      lastname: "",
      number: "",
      role: "",
      message: "",
    },
    showPopup: false,
  };

  componentDidMount() {
    fetch("http://localhost:3001/notes")
      .then((resp) => resp.json())
      .then((data) => this.setState({ notes: data }));
  }

  changeHandler = (e) => {
    //Must have for forms with onChange
    this.setState({
      inputData: { ...this.state.inputData, [e.target.name]: e.target.value },
    });
  };

  popupHandler = (e) => {
    //shows popup
    this.setState({ showPopup: true });
    e.preventDefault();
  };

  sendDataHandler = () => {
    const requestOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(this.state.inputData),
    };
    fetch("http://localhost:3001/notes", requestOptions); //where to post and what
    //.then((res = res.json()))
    //.then((data) => this.setState({postId: data.id)));
    alert("Note is posted", window.location.reload());
  };

  render() {
    return (
      <div>
        <Form change={this.changeHandler} submit={this.popupHandler} />
        <View {...this.state.inputData} />
        <NotesList notes={this.state.notes} />
        {this.state.showPopup && (
          <Popup {...this.state.inputData} submit={this.sendDataHandler} />
        )}
      </div>
    );
  }
}

export default App;
