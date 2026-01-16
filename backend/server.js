const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let transactions = [];

app.get("/transactions", (req, res) => {
  res.json(transactions);
});

app.post("/transactions", (req, res) => {
  const { title, amount, type } = req.body;

  if (!title || !amount || !type) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newTransaction = {
    id: Date.now(),
    title,
    amount: parseFloat(amount),
    type,
  };

  transactions.push(newTransaction);
  res.json(newTransaction);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
