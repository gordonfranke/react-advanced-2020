import React from "react";
import { data } from "../diamond_color";

const DiamondColorSelector = () => {
  return (
    <>
      <h2>Diamond Selector Test</h2>
      {data.map((color) => (
        <button key={color.key} className="btn-diamond">
          {color.name}
        </button>
      ))}
    </>
  );
};

export default DiamondColorSelector;
