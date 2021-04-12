import React from "react";

import "./GameOver.css";

const closeHandler = () => {
  window.location.reload();
};

const endGame = (score) => {
  if (score < 5) {
    return "You didn't see that coming?";
  } else if (score < 10) {
    return "Just because something works, doesn't mean it can't be improved.";
  } else if (score < 15) {
    return "I can do this all day.";
  } else if (score < 20) {
    return "Nothing goes over my head. My reflexes are too fast. I would catch it";
  } else {
    return "I am groot";
  }
};

const GameOver = (props) => {
  return (
    <div className="overlay">
      <div className="gameoverbox">
        <h2>Game Over!</h2>
        <p>Your score: {props.score}</p>
        <p>{endGame(props.score)}</p>
        <button onClick={closeHandler}>X</button>
      </div>
    </div>
  );
};

export default GameOver;
