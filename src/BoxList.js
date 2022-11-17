import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
/**
 * State: [
 *           {
 *              height:height,
 *              width:width,
 *              backgroundColor:backgroundColor,
 *              id: number
 *           },
 *           ...
 *        ]
 *
 *
 * Props: None
 *
 * App -> Boxlist -> Box
 *                -> NewBoxForm
 */

export default function BoxList() {
  const [boxes, setBoxes] = useState([]);

  function handleRemove(id) {
    setBoxes((prevBoxes) => prevBoxes.filter((box) => box.id !== id));
  }

  return (
    <div>
      <NewBoxForm setBoxes={setBoxes} />
      <div>
        {boxes.map((box) => {
          return (
            <Box
              box={{ ...box }}
              key={box.id}
              removeCb={() => handleRemove(box.id)}
            />
          );
        })}
      </div>
    </div>
  );
}
