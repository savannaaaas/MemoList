import React from "react";
export const SearchInput = React.memo(({ handleChange }) => {
  console.log("rerender");
  return (
    <>
      <textarea onChange={(e) => handleChange(e.target.value)} />
    </>
  );
});
