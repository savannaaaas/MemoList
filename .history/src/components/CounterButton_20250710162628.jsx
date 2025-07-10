import React from "react";
export const CounterButton = React.memo(({ handleClick }) => {
  console.log("rerender");
  return (
    <>
      <button onClick={handleClick}>++</button>
    </>
  );
});
