import React, { useState, useContext, Navigate } from "react";
import { Tooltip, Grow } from '@mui/material';
import { watchlist } from "../data/data";
import {BarChart, BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz} from '@mui/icons-material';
import GeneralContext from "./GeneralContext";


const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) =>{
          return(
            <WatchListItem stock={stock} key={index} />
          )
        })}
      </ul>

    </div>
  );
};

export default WatchList;


const WatchListItem = ({stock})=>{
  const [showWatchListActions, setShowWatchListActions] = useState(false);

  const handleMouseEnter = (e) =>{
    setShowWatchListActions(true);
  }
  const handleMouseLeave = (e) =>{
    setShowWatchListActions(false);
  }

  return(
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down": "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down"/>
          ):( 
            <KeyboardArrowUp className="up"/> 
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {setShowWatchListActions && <WatchListActions uid={stock.name} />}
    </li>
  )
}


const WatchListActions = ({uid})=>{
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

    const handleSellClick = () => {
      generalContext.openSellWindow(uid);
    };
    
  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          onClick={handleBuyClick}
        >
          <button className="buy">buy</button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          onClick={handleSellClick}
        >
          <button className="sell">sell</button>
        </Tooltip>
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartOutlined className="icon"/>
          </button>
        </Tooltip>
        <Tooltip
          title="More"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <MoreHoriz className="icon"/>
          </button>
        </Tooltip>
      </span>
    </span>
  )
}