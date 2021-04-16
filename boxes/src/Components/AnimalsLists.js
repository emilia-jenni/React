import React, { Component } from "react";

import AnimalCard from "./AnimalCard";
import SearchBox from "./SearchBox/SearchBox";
import "./Animal.css";

import { animals } from "./animals"; /*you can rename the constant like import {animals as animalslist} */

class AnimalsLists extends Component {
  state = {
    animals: animals,
    searchInput: "",
  };

  clickHandler = (name) => {
    /*could be name but it can be whatever*/
    alert("Hello, my name is " + name);
  };

  searchValueHandler = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
    console.log(this.state.searchInput);
  };

  render() {
    const animalFilter = this.state.animals.filter((animals) => {
      return animals.name
        .toLocaleLowerCase()
        .includes(this.state.searchInput.toLocaleLowerCase());
    });

    const animalslist = animalFilter.map((animals) => {
      /*could be animals but can be whatever */
      return (
        <AnimalCard
          name={animals.name}
          clickme={() => this.clickHandler(animals.name)}
          /*clickme={this.clickHandler.bind(this, whatever.name)}*/
          key={animals.name}
        />
      );
    });
    return (
      <div>
        <SearchBox search={this.searchValueHandler} />
        <div className="animallist">{animalslist}</div>;
      </div>
    );
  }
}

export default AnimalsLists;
