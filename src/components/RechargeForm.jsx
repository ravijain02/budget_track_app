import React, { useState } from "react"

export default function RechargeForm({ platforms, onRecharge }) {
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const platform = platforms.find(p => p.name === selectedPlatform);
    const totalSpent = platform.recharges.reduce((sum, r) => sum + r.amount, 0);
    const newTotal = totalSpent + Number(amount);

    if (!selectedPlatform || !amount || !date) {
      alert("Fill all fields");
      return;
    }

    if (newTotal > platform.budget) {
      alert("Recharge exceeds the monthly budget");
      return;
    }

    onRecharge(selectedPlatform, { amount: Number(amount), date });
    setAmount("");
    setDate("");
  };

  return (
    <form className="recharge-form" onSubmit={handleSubmit}>
      <h2>Add Recharge</h2>
      <label>
        Platform:
        <select
          value={selectedPlatform}
          onChange={(e) => setSelectedPlatform(e.target.value)}
          required
        >
          <option value="">Select Platform</option>
          {platforms.map((p, idx) => (
            <option key={idx} value={p.name}>
              {p.name}
            </option>
          ))}
        </select>
      </label>

      <label>
        Recharge Amount:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          placeholder="Enter Amount"
        />
      </label>

      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </label>

      <button type="submit">Add Recharge</button>
    </form>
  );
}
