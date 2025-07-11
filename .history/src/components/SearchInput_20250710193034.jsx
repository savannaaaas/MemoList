import React, { useContext } from "react";
import { MyContext } from "../MyContext";
export const SearchInput = React.memo(({ handleChange }) => {
  return (
    <div>
      <input
        onKeyDown={(e) =>
          e.key === "Enter" ? handleChange(e.target.value) : null
        }
      />
    </div>
  );
});
