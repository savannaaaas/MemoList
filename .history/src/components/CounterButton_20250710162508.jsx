export const CounterButton = React.memo(({ handleClick }) => {
  return (
    <>
      <button onClick={handleClick}>++</button>
    </>
  );
});
