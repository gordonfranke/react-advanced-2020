import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const deletePerson = (personID) => {
    // let newPeople = people.filter((person) => person.id !== personID);
    setPeople((oldPeople) => {
      return oldPeople.filter((person) => person.id !== personID);
    });
  };

  const removeAll = () => {
    setPeople([]);
  };

  return (
    <>
      {people.map((person) => {
        // const { id, name } = person;
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button
              type="button"
              className="btn"
              onClick={() => deletePerson(person.id)}
            >
              Delete
            </button>
          </div>
        );
      })}
      <button type="button" className="btn" onClick={removeAll}>
        Clear All
      </button>
    </>
  );
};

export default UseStateArray;
