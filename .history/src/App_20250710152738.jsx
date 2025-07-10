import { useCallback, useState } from "react";
import "./App.css";
import { SearchInput } from "./components/SearchInput";
import { ItemList } from "./components/ItemList";
/*
3. **Компонент `ItemList`**:
    - Получает список элементов и значение поиска как пропсы.
    - Фильтрует список на основе значения поиска.
    - Результат фильтрации должен быть мемоизирован с помощью `useMemo`, чтобы избежать лишних вычислений при каждом рендере.
4. **Компонент `CounterButton`**:
    - Рендерит кнопку для увеличения счетчика.
    - При нажатии на кнопку увеличивается состояние счетчика в родительском компоненте.
    - Функция обновления счетчика должна быть мемоизирована с помощью `useCallback`, чтобы избежать лишних ререндеров дочерних компонентов. */
function App() {
  const [count, setCount] = useState("");
  const [stateInput, setStateInput] = useState("");
  const handleChange = useCallback(
    (value) => {
      setStateInput(value);
    },
    [setStateInput]
  );
  const list = [
    { id: 1, name: "Anna", age: 12, module: "React" },
    { name: "Pavel", age: 56, module: "JavaScript" },
    { name: "Ulyana", age: 36, module: "RTC" },
  ];

  return (
    <>
      <SearchInput handleChange={handleChange} />
      {stateInput}
      <ItemList list={list} stateInput={stateInput} />
    </>
  );
}

export default App;
