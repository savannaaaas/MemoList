import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MyContext } from "./MyContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyContext.Provider>
      {" "}
      <App />
    </MyContext.Provider>
  </StrictMode>
);
