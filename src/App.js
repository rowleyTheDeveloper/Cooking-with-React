import "./App.css";
import Counter from "./Counter";
import CounterHooks from "./CounterHooks";
import React, { useState } from "react";

export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState("green");

  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      Counter
      <Counter initialCount={0} />
      Counter Hooks
      <CounterHooks initialCount={3} />
      <button
        onClick={() =>
          setTheme((prevTheme) => {
            return prevTheme === "red" ? "blue" : "red";
          })
        }
      >
        Toggle Theme
      </button>
    </ThemeContext.Provider>
  );
}

export default App;
