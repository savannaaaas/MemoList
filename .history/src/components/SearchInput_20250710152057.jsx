import React from "react";
export const SearchInput = React.memo(({ handleChange }) => {
  console.log("rerender");
  return (
    <>
      <textarea onKeyDown={(e) => handleChange(e.target.value)} />
    </>
  );
});
