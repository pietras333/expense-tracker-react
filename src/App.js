import React, { useEffect, useState } from "react";
import AppStyles from "./AppStyles.css";
import TransactionHistoryStyles from "./components/TransactionHistory/TransactionHistoryStyles.css";
import Comprasion from "./components/Comprasion/Comprasion";
import HeaderInfo from "./components/HeaderInfo/HeaderInfo";
import Transaction from "./components/TransactionHistory/Transaction";
import TransactionsHeader from "./components/TransactionHistory/TransactionsHeader";

const App = () => {
  const [currentBalance, setCurrentBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [amount, setAmount] = useState(0);
  const [message, setMessage] = useState("");
  const [test, setTest] = useState([]);

  useEffect(() => {
    setCurrentBalance(income - expense);
  }, [income, expense]);

  const handleAmountChange = (event) => {
    setAmount(parseFloat(event.target.value));
  };
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
  const handleTransaction = () => {
    if (amount > 0) {
      setIncome((prevState) => (prevState += amount));
      setTest((prevState) => [...prevState, [message, amount]]);
    }
    if (amount < 0) {
      setExpense((prevState) => (prevState -= amount));
      setTest((prevState) => [...prevState, [message, amount]]);
    }
  };

  return (
    <div className="App">
      <div className="app-wrapper">
        <HeaderInfo balance={currentBalance} />
        <Comprasion income={income} expense={expense} />
        <TransactionsHeader />
        {test.map((x) => (
          <Transaction message={x[0]} value={x[1]} />
        ))}
        <div className="new-transaction">
          <h1>Add New Transaction</h1>
          <h4>Message</h4>
          <input
            type="text"
            className="message-input"
            onChange={(event) => handleMessageChange(event)}
          />
          <h4>Amount</h4>
          <input
            type="number"
            className="amount-input"
            onChange={(event) => handleAmountChange(event)}
          />
          <button className="send-transaction" onClick={handleTransaction}>
            Send Transaction
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
