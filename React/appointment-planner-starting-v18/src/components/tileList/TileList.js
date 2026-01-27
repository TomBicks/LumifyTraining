import React from "react";
import { Tile } from "../../components/tile/Tile";

export const TileList = ({objectData}) => {
  return (
    <div>
      <ol>
      {
        //By destructuring (in the .map(...) itself), we can obtain name, then place *everything else* into description, using the spread syntax
        objectData.map(({name, ...description}, index) => 
          //We can then shove the spread description; every *other* value, into description, to be mapped into Tile elements
          <Tile key={index} name={name} description={description}/>
        )
      }
      </ol>
    </div>
  );
};
