import React from "react";
import { Tile } from "../../components/tile/Tile";

//TODO!! Do I need to have each of the Tile components in list item elements, if they want "to render as a list"????
export const TileList = ({objectData}) => {
  return (
    <div>
      <h4>This is a TileList Element</h4>
      <ol>
      {
        objectData.map(
          (data) => <Tile key={data.name} name={data.name}/>)
      }
      </ol>
    </div>
  );
};
