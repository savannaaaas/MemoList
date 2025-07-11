import React, { useContext } from "react";
import { MyContext } from "../MyContext";
export const SearchInput = React.memo(({ handleChange }) => {
  const theme = useContext(MyContext);
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
