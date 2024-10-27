import React, { useState } from "react";

import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} alt="logo" />
      <div className="menus">
        <ul>
          <Link 
            style={{textDecoration:"none", }}
            to="/"
            onClick={() => handleMenuClick(0)}
          >
            <li>
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </li>
          </Link>
          <Link 
            style={{textDecoration:"none", }}
            to="/orders"
            onClick={() => handleMenuClick(1)}
          >
            <li>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
            </li>
          </Link>
          <Link 
            style={{textDecoration:"none", }}
            to="/holdings"
            onClick={() => handleMenuClick(2)}
          >
            <li>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
            </li>
          </Link>
          <Link 
            style={{textDecoration:"none", }}
            to="/positions"
            onClick={() => handleMenuClick(3)}
          >
            <li>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
            </li>
          </Link>
          <Link 
            style={{textDecoration:"none", }}
            to="/funds"
            onClick={() => handleMenuClick(4)}
          >
            <li>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
            </li>
          </Link>
          <Link 
            style={{textDecoration:"none", }}
            to="/apps"
            onClick={() => handleMenuClick(5)}
          >
            <li>
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>Apps</p>
            </li>
          </Link>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
        {isProfileDropdownOpen}
      </div>
    </div>
  );
};

export default Menu;
