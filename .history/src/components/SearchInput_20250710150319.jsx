export const SearchInput = ({ setStateInput }) => {
  return (
    <>
      <textarea onChange={(e) => setStateInput(e.target.value)} />
    </>
  );
};
