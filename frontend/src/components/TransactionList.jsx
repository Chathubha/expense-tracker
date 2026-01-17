import React from "react";

const TransactionList = ({ transactions }) => {
  return (
    <ul className="transaction-list">
      {transactions.map(t => (
        <li key={t.id} className={t.type}>
          <span>{t.title}</span>
          <span>${t.amount.toFixed(2)}</span>
        </li>
      ))}
    </ul>
  );
};

export default TransactionList;
