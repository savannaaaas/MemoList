import { useMemo } from "react";

export const ItemList = ({ list, stateInput }) => {
    const filterItem = useMemo(()=>list
          .filter((item) =>
            item.module.toUpperCase().includes(stateInput.toUpperCase())
          ), [list,stateInput])
  return (
    <>
      {list &&
        
          .map(({ id, name, age, module }) => {
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
};
