import { useCallback, useState } from "react";
import "./App.css";
import { SearchInput } from "./components/SearchInput";
/*
2. **Компонент `SearchInput`**:
    - Рендерит текстовое поле, которое позволяет пользователю вводить текст для поиска по списку.
    - Ввод текста в поле поиска должен обновлять состояние поиска в родительском компоненте.
    - Использовать `useCallback` для передачи функции изменения состояния в дочерний компонент.
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
    [stateInput]
  );

  return (
    <>
      <SearchInput handleChange={handleChange} />
      {stateInput}
    </>
  );
}

export default App;
