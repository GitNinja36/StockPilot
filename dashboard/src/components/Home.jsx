import React from "react";
import { useLocation } from "react-router-dom";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const location = useLocation();
  const hideWatchList = location.pathname === "/signup";

  return (
    <>
    <TopBar />
      <div className="main-container">
        <Dashboard hideWatchList={hideWatchList}  />
      </div>
    </>
  );
};

export default Home;