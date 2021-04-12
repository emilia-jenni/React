import React, { Component } from "react";
import Circle from "./Components/Circle";
import "./App.css";
import GameOver from "./Components/GameOver";

import bgsound from "./assets/sounds/bg.mp3";
import gaveoversound from "./assets/sounds/gameover.mp3";

let gameStartSound = new Audio(bgsound);
let gameEndSound = new Audio(gaveoversound);

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

class App extends Component {
  state = {
    score: 0,
    current: 0,
    circles: [
      { id: 1, color: "ironman" },
      { id: 2, color: "thor" },
      { id: 3, color: "hulk" },
      { id: 4, color: "hawkeye" },
    ],
    showGameOVer: false,
    rounds: 0,
    gameStart: false,
    oneClick: false,
  };

  timer = undefined;
  speed = 1500;

  clickHandler = (id) => {
    console.log("You clicked the circle!" + id);

    if (this.state.current !== id) {
      this.endHandler();
      return;
    }
    if (this.state.oneClick === false) {
      this.setState({
        score: this.state.score + 1,
        rounds: 0,
        oneClick: true,
      });
    }

    this.setState({
      score: this.state.score + 1,
      rounds: 0,
    });
  };

  highlightedCircle = () => {
    if (this.state.rounds >= 5) {
      this.endHandler();
      return;
    }

    let nextActive = undefined;

    do {
      nextActive = getRndInteger(1, 4);
    } while (nextActive === this.state.current);

    this.setState({
      current: nextActive,
      rounds: this.state.rounds + 1,
      oneClick: false,
    });

    console.log(this.state.rounds);

    this.speed *= 0.95;
    this.timer = setTimeout(this.highlightedCircle, this.speed);

    console.log("active circle is ", this.state.current);
  };

  startHandler = () => {
    this.highlightedCircle();
    this.setState({ gameStart: true });
    gameStartSound.play();
  };

  endHandler = () => {
    gameStartSound.pause();
    gameEndSound.play();
    clearTimeout(this.timer);
    this.setState({
      showGameOVer: true,
    });
  };

  render() {
    const circlesList = this.state.circles.map((c) => {
      return (
        <Circle
          id={c.id}
          key={c.id}
          color={c.color}
          click={() => this.clickHandler(c.id)}
          active={this.state.current === c.id}
          disabled={this.state.gameStart}
        />
      );
    });

    return (
      <div>
        <h1>Avengers Speed Game</h1>
        <p>Your score is: {this.state.score}</p>
        <div className="circles">{circlesList}</div>
        <button onClick={this.startHandler} disabled={this.state.gameStart}>
          Start
        </button>
        <button onClick={this.endHandler}>Stop</button>
        {this.state.showGameOVer && <GameOver score={this.state.score} />}
      </div>
    );
  }
}

export default App;
