import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#242424" : "#ffffff";
    document.body.style.color = darkMode ? "white" : "black";
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
        />
        <Route
          path="/search"
          element={
            <SearchPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          }
        />
        <Route path="/images" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/news" element={<Home />} />
        <Route path="/maps" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
