import React, { useState } from "react";
import "./Tabs.css";

const tabs = [
  "All", "Images", "Videos", "Shopping", "News", "Short videos", "Forums", "More"
];

function Tabs() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="tabs-bar">
      {tabs.map((tab) => (
        <div
          key={tab}
          className={`tab-item ${activeTab === tab ? "active" : ""}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
}

export default Tabs;
