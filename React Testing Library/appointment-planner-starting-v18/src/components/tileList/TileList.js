import React from "react";
import { Tile } from "../../components/tile/Tile";

export const TileList = ({objectData}) => {
  return (
    <div>
      <h4>This is a TileList Element</h4>
      <ol>
      {
        objectData.map((data) => <Tile key={data.name} name={data.name} description={[]}/>)
      }
      </ol>
    </div>
  );
};
