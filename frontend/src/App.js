import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';

import DashboardCards from "./components/DashboardCards";
import AddTransactionForm from "./components/AddTransactionForm";
import TransactionList from "./components/TransactionList";

function App() {
  const [transactions, setTransactions] = useState([]);

  // Fetch transactions from backend
  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const res = await axios.get("http://localhost:5000/transactions");
      setTransactions(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // Add a new transaction
  const addTransaction = async (transaction) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/transactions",
        transaction
      );
      setTransactions([...transactions, res.data]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <DashboardCards transactions={transactions} />
      <AddTransactionForm addTransaction={addTransaction} />
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default App;

