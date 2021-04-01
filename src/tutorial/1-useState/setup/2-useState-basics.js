import React, { useState } from "react";

const UseStateBasics = () => {
  const [var1, setVar1] = useState("Hello GCF");

  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    console.log("Before: " + clickCount);
    setClickCount(clickCount + 1);
    console.log("After: " + clickCount);
    setVar1("Click Count: " + clickCount.toString());
  };

  console.log("Render: " + clickCount);
  return (
    <>
      <h2>{var1}</h2>
      <button className="btn" onClick={handleClick}>
        Change Title
      </button>
    </>
  );
};

export default UseStateBasics;
