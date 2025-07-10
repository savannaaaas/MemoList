export const ItemList = ({ list, stateInput }) => {
  return (
    <>
      {list &&
        list
          .filter((item) => item.module === stateInput)
          .map(({ id, name, age, module }) => {
            return (
              <ul key={id}>
                <li>
                  Name: {name}, age: {age}
                </li>
              </ul>
            );
          })}
    </>
  );
};
