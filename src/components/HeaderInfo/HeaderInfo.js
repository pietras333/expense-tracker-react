import React from "react";
import HeaderInfoStyles from "./HeaderInfoStyles.css";

const HeaderInfo = (props) => {
  return (
    <div className="header-info">
      <h1>Expense Tracker</h1>
      <h3>Current Balance:</h3>
      <h2>{props.balance.toFixed(2) + "$"}</h2>
    </div>
  );
};

export default HeaderInfo;
