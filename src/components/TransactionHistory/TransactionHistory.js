import React from "react";
import Transaction from "./Transaction";
import TransactionHistoryStyles from "./TransactionHistoryStyles.css";

const TransactionHistory = () => {
  return (
    <div className="transaction-history">
      <h1>Last Transactions</h1>
      <Transaction />
      <Transaction />
      <Transaction />
    </div>
  );
};

export default TransactionHistory;
