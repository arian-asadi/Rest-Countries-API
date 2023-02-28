import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountryDetail from "./components/CountryDetail";
import Header from "./components/Header";
import Countries from "./Countries";

export const ThemeContext = createContext(null);
function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = (themeType) => {
    setTheme(themeType);
  };
  const body = document.querySelector("body");
  body.style.background = theme === "light" ? "white" : "hsl(207, 26%, 17%)";

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div id={theme}>
        <BrowserRouter>
          <Header themeFunc={toggleTheme} />
          <Routes>
            <Route path="/" element={<Countries />} />
            <Route path="/country/:name" element={<CountryDetail />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
