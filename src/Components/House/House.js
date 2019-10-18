import React, { Component } from "react";

function House(props) {
  let { name, address, city, state, zip, id } = props.house;
  return (
    <div index={props.index}>
      <h3>Property Name: {name}</h3>
      <h3>Address: {address}</h3>
      <h3>City: {city}</h3>
      <h3>State: {state}</h3>
      <h3>Zip: {zip}</h3>
      <button onClick={() => props.delete(id)}>Delete</button>
    </div>
  );
}

export default House;
