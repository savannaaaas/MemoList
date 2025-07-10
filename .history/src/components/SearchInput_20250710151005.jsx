export const SearchInput = ({ handleChange }) => {
  return (
    <>
      <textarea onChange={(e) => handleChange(e.target.value)} />
    </>
  );
};
