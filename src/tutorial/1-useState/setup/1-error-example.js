import React from "react";

const ErrorExample = () => {
  let title = "Gordy Title";

  const handleClick = () => {
    title = "Button Title";
    console.log(title);
  };

  return (
    <>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>
      <input type="text" id="testInput"></input>
    </>
  );
};

export default ErrorExample;
