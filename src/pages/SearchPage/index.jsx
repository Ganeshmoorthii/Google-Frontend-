import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SearchPageHeader from "../../components/SearchPageHeader";
import Tabs from "../../components/Tabs";
import { fetchSearchResults } from "../../api/searchApi";
import "./index.css";
import PaginationControlled from "../../components/Pagination";

function SearchPage({ toggleDarkMode, darkMode }) {
  const location = useLocation();
  const query = location.state?.query || "";
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      fetchSearchResults(query).then(setResults);
    }
  }, [query]);

  return (
    <>
      <SearchPageHeader toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Tabs />
      <ul className="search-results">
        {results.length === 0 ? (
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            No results found.
          </p>
        ) : (
          results.map((item, index) => (
            <li key={index} className="search-result-item">
              {/* Top Row: Favicon + Site Name */}
              <div className="result-header">
                <img
                  src={`https://www.google.com/s2/favicons?domain=${item.displayLink}`}
                  alt="favicon"
                  className="favicon"
                />
                <span className="site-name">{item.displayLink}</span>
              </div>

              {/* Title Link */}
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <h3>{item.title}</h3>
              </a>

              {/* Snippet */}
              <p>{item.snippet}</p>
            </li>
          ))
        )}
      </ul>

      <div className="pagination-container">
        <PaginationControlled />
      </div>
    </>
  );
}

export default SearchPage;
