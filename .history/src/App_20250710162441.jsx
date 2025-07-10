import { useCallback, useState } from "react";
import "./App.css";
import { SearchInput } from "./components/SearchInput";
import { ItemList } from "./components/ItemList";
import { CounterButton } from "./components/CounterButton";

function App() {
  const [count, setCount] = useState("");
  const [stateInput, setStateInput] = useState("");
  const handleChange = useCallback(
    (value) => {
      setStateInput(value);
    },
    [setStateInput]
  );
  const handleClick = useCallback(() => setCount(() => count + 1), [count]);
  const list = [
    { id: 1, name: "Anna", age: 12, module: "React" },
    { id: 2, name: "Pavel", age: 56, module: "JavaScript" },
    { id: 3, name: "Ulyana", age: 36, module: "RTC" },
    { id: 4, name: "Ivan", age: 26, module: "React" },
  ];

  return (
    <>
      <SearchInput handleChange={handleChange} />
      <ItemList list={list} stateInput={stateInput} />
      {count}
      <CounterButton handleClick={handleClick} />
    </>
  );
}

export default App;
