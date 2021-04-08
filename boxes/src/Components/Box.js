import React from "react";

const Box = (props) => {
  const giveLove = () => {
    console.log("love");
  };

  return (
    <div className="box">
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Title: {props.title}</p>
      <button onClick={giveLove}>Share Love</button>
    </div>
  );
};

export default Box;
