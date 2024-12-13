import React,{ useState, Navigate } from "react";
import { Route, Routes, useLocation} from "react-router-dom";
import 'react-toastify/ReactToastify.css';
import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import SiggendIn from "./SiggendIn";
import LoggedIn from "./LoggedIn";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import GeneralContext, { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />
  }

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
          <Route path="/orders" element={<Orders/>} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/signup" element={<SiggendIn />} />
          <Route path="/login" element={<LoggedIn />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
