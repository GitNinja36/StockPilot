import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import GeneralContext, { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  const location = useLocation();
  const hideWatchList = location.pathname === "/signup" || location.pathname === "/login";

  return (
    <div className="dashboard-container">
      {!hideWatchList && (
          <GeneralContextProvider>
            <WatchList />
          </GeneralContextProvider>
      )}
      <div className="content">
        <Routes>
          <Route path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
