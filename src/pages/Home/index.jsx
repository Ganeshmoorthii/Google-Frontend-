import React from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import Header from "../../components/Header";
import "./index.css";

function Home({ darkMode, toggleDarkMode }) {
  const navigate = useNavigate();
  const handleSearch = () => {
    const query = document.querySelector(".search-input").value;
    navigate(`/search/${query}`);
  };

  return (
    <div>
      <Header toggleDarkMode={toggleDarkMode} />
      <div className="body">
        <img src="/googlelogo.png" alt="Google Logo" className="logo" />
        <SearchBar darkMode={darkMode} />
        <div className="buttons">
          <button className="btn" onClick={handleSearch}>
            Google Search
          </button>
          <button className="btn">I'm Feeling Lucky</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
