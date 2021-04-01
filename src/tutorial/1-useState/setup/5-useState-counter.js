import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const complexIncrease = () => {
    setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };

  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>Complex Counter</h2>
        <h1>{value}</h1>
        <button type="button" className="btn" onClick={complexIncrease}>
          Add
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
