import React, { Component } from "react";
import Box from "./Box";

class BoxesList extends Component {
  state = {
    persons: [
      {
        name: "Bucky Barnes",
        age: 36,
        title: "Asset",
      },
      {
        name: "Joaquin Torres",
        age: 27,
        title: "Lieutenant",
      },
      {
        name: "Sam Wilson",
        age: 36,
        title: "Pilot",
      },
    ],
  };

  marvelClick = () => {
    this.setState({
      persons: [
        {
          name: "Bucky Barnes",
          age: 106,
          title: "White Wolf",
        },
        {
          name: "Joaquin Torres",
          age: 27,
          title: "Falcon",
        },
        {
          name: "Sam Wilson",
          age: 36,
          title: "Captain America",
        },
      ],
    });
  };

  render() {
    return (
      <main>
        <button onClick={this.marvelClick}>MARVEL!</button>
        <Box
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          title={this.state.persons[0].title}
        />
        <Box
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          title={this.state.persons[1].title}
        />
        <Box
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          title={this.state.persons[2].title}
        />
      </main>
    );
  }
}

export default BoxesList;
