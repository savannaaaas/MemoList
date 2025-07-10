export const SearchInput = React.memo(({ handleChange }) => {
  return (
    <>
      <textarea onChange={(e) => handleChange(e.target.value)} />
    </>
  );
});
