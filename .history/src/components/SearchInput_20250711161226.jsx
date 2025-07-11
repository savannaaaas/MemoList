import React from "react";

export const SearchInput = React.memo(({ handleChange }) => {
  return (
    <input
      onKeyDown={(e) =>
        e.key === "Enter" ? handleChange(e.target.value) : null
      }
    />
  );
});
