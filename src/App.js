import React from "react";
import AppStyles from "./AppStyles.css";
import Comprasion from "./components/Comprasion/Comprasion";
import HeaderInfo from "./components/HeaderInfo/HeaderInfo";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

const App = () => {
  return (
    <div className="App">
      <div className="app-wrapper">
        <HeaderInfo />
        <Comprasion />
        <TransactionHistory />
        <div className="new-transaction">
          <h1>Add New Transaction</h1>
          <h4>Message</h4>
          <input type="text" className="message-input" />
          <h4>Amount</h4>
          <input type="number" className="amount-input" />
          <button className="send-transaction">Send Transaction</button>
        </div>
      </div>
    </div>
  );
};

export default App;
