export const ItemList = ({ list, stateInput }) => {
  return (
    <>
      {list && list.filter((item) => item.module === stateInput).map(() => {})}
    </>
  );
};
