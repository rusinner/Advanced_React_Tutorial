import React, { useState } from "react";

const UseStateBasics = () => {
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);
  const [text, setText] = useState("200");
  const handleClick = () => {
    if (text === "200") {
      setText("hello World");
    } else {
      setText("200");
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
