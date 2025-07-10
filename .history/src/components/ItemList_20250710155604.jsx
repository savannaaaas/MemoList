import React from "react";
import { useMemo } from "react";

export const ItemList = React.memo(
  ({ list, stateInput }) => {
    console.log("Rerender");

    return (
      <>
        {stateInput &&
          filterItem.map(({ id, name, age, module }) => {
            return (
              <ul key={id}>
                <li>
                  name: {name}, age: {age}, module: {module}
                </li>
              </ul>
            );
          })}
      </>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.stateInput == nextProps.stateInput;
  }
);
