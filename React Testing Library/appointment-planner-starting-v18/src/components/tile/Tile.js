import React from "react";

export const Tile = ({name, description}) => {
  return (
    <div className="tile-container">
      <p className="tile-title">This is a Tile, with name {name}</p>
      {
        //description.map(
        //(desc) => <p className="tile" key={desc}></p>)
      }
    </div>
  );
};
