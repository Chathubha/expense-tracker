import React from "react";

const DashboardCards = ({ transactions }) => {
  const income = transactions
    .filter(t => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expense;

  return (
    <div className="cards">
      <div className="card balance">
        <h3>Balance</h3>
        <p>${balance.toFixed(2)}</p>
      </div>
      <div className="card income">
        <h3>Income</h3>
        <p>${income.toFixed(2)}</p>
      </div>
      <div className="card expense">
        <h3>Expense</h3>
        <p>${expense.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default DashboardCards;
