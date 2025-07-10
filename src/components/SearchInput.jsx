import React from "react";
export const SearchInput = React.memo(({ handleChange }) => {
  console.log("rerender");
  return (
    <>
      <input
        onKeyDown={(e) =>
          e.key === "Enter" ? handleChange(e.target.value) : null
        }
      />
    </>
  );
});
