export const ItemList = ({ list, stateInput }) => {
  return (
    <>
      {list &&
        list
          .filter((item) =>
            item.module.toUpperCase().includes(stateInput.toUpperCase())
          )
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
