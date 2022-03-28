import React from "react";
import TransactionStyles from "./TransactionStyles.css";

const Transaction = (props) => {
  const { message, value } = props;
  return (
    <div className="transaction-wrapper">
      <div className="message">
        <h3>"{message}"</h3>
      </div>
      <div className="amount">
        <h3>{value}$</h3>
      </div>
    </div>
  );
};

export default Transaction;
