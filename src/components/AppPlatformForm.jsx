import { useState } from "react";

export default function AddPlatformForm({ onAdd }) {
  const platforms = [
    "Select Plotforms",
    "Facebook KRK",
    "Facebook Google",
    "Facebook Page 1",
    "Facebook Page 2",
    "Facebook Page 3",
  ];

  const [name, setName] = useState(platforms[0]);
  const [budget, setBudget] = useState("");
  const [rechargeAmount, setRechargeAmount] = useState("");
  const [rechargeDate, setRechargeDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !budget || !rechargeAmount || !rechargeDate || name === "Select Plotforms") {
        alert("Please fill all fields");
        return;
    }

    const platformData = {
        name,
        budget: Number(budget),
        createdAt: new Date().toISOString().split("T")[0],
        recharges: [
        {
            amount: Number(rechargeAmount),
            date: rechargeDate
        },
        ],
    };

    onAdd(platformData);
    setName(platforms[0]);
    setBudget("");
    setRechargeAmount("");
    setRechargeDate("");
    };


  return (
    <form className="add-platform-form" onSubmit={handleSubmit}>
      <h2>Budget Platform</h2>

      <div className="form-row-inputs">
        <label>Platform Name:</label>
        <label>Monthly Budget:</label>
        <select value={name} onChange={(e) => setName(e.target.value)} required>
          {platforms.map((platform, idx) => (
            <option key={idx} value={platform}>
              {platform}
            </option>
          ))}
        </select>

        <input
          type="number"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          min="0"
          required
        />
      </div>

      <div className="form-row-inputs">
        <label>Initial Recharge Amount:</label>
        <label>Initial Recharge Date:</label>
        <input
          type="number"
          value={rechargeAmount}
          onChange={(e) => setRechargeAmount(e.target.value)}
          min="0"
          placeholder="Enter Amount"
          required
        />
        <input
          type="date"
          value={rechargeDate}
          onChange={(e) => setRechargeDate(e.target.value)}
          required
        />
      </div>

      <button type="submit">Add Platform</button>
    </form>
  );
}
