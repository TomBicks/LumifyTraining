import React from "react";
import { Tile } from "../../components/tile/Tile";

export const TileList = ({objectData}) => {
  return (
    <div>
      <h4></h4>
      <ol>
      {
        objectData.map((data, index) => <Tile key={index} name={data.name} description={[
          `Phone number is: ${data.phone}`,
          `Email is ${data.email}`
        ]}/>)
      }
      </ol>
    </div>
  );
};
