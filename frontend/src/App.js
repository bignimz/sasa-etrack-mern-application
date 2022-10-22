import "./App.css";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import NavBar from "./components/NavBar";

const initialForm = {
  amount: 0,
  description: "",
  date: "",
};

function App() {
  const [form, setForm] = useState(initialForm);

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  async function fetchTransactions() {
    const res = await fetch("http://localhost:4000/transaction");
    const { data } = await res.json();
    setTransactions(data);
    console.log(data);
  }

  function handleInput(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch("http://localhost:4000/transaction", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "content-type": "application/json" },
    });

    if (res.ok) {
      fetchTransactions();
      setForm(initialForm);
    }
  }

  return (
    <div>
      <NavBar />
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="amount"
          value={form.amount}
          onChange={handleInput}
          placeholder="Enter transaction amount"
        />
        <input
          type="text"
          name="description"
          value={form.description}
          onChange={handleInput}
          placeholder="Enter transaction details"
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleInput}
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>

      <br />

      <section>
        <table>
          <thead>
            <th>Amount</th>
            <th>Description</th>
            <th>Date</th>
          </thead>
          <tbody>
            {transactions.map((trx) => (
              <tr key={trx.id}>
                <td>{trx.amount}</td>
                <td>{trx.description}</td>
                <td>{trx.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default App;
