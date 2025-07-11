import React from "react";
export const CounterButton = React.memo(({ handleClick }) => {
  console.log("rerender count");
  return <button onClick={handleClick}>++</button>;
});
