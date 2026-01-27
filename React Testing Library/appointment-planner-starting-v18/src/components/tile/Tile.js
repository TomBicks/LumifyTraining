import React from "react";

//Grabs the first letter of a string, capitlises it, then contacts it with the rest of the string beyond the first character, returning a capitlised string
//NOTE!! We're using this to make the type capitlised, so we can use it in a nicer looking way
const capitalise = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};

export const Tile = ({name, description}) => {
  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {
        //"Iterate over the values in the description object, passed in via props, and render a <p> element for each value and give each a className of "tile"."
        //By using Object.entries, we can iterate over an object as we would an array, meaning .map works here
        //NOTE!! Not sure why, but it's important key, value are in an array; without them, or in a {}, it gets weird and wrong
        Object.entries(description).map(([key, value]) => 
          <p className="tile" key={key}>{capitalise(key)} is {value}</p>
        )
      }
    </div>
  );
};
