import React from "react";

const NumersList = (props) => {
  return (
    <ul>
      {props.numbers.map((number) => (
        <li key={number}>{number}</li>
      ))}
    </ul>
  );
};


export default NumersList;