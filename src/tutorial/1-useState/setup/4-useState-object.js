import React, { useState } from "react";

const UseStateObject = () => {
  let [person, setPerson] = useState({
    name: "peter",
    age: 24,
    message: "this is msg",
  });

  const changeMessage = () => {
    let p = person;
    p.message = "New Message";
    console.log(p);
    setPerson({ ...p });
    //setPerson({ ...person, message: "Test New Message" });
    // setPerson({ person });
    // setPerson({
    //   name: person.name,
    //   age: person.age,
    //   message: "New Message",
    // });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.message}</h3>
      <h3>{person.age}</h3>
      <button type="button" className="btn" onClick={changeMessage}>
        Change Msg
      </button>
    </>
  );
};

export default UseStateObject;
