import React from "react";

export default function BudgetCard({ platform }) {
  const recharges = platform.recharges || [];

  const totalSpent = recharges.reduce((sum, r) => sum + r.amount, 0);
  const remaining = platform.budget - totalSpent;
  const remainingClass = remaining < 5000 ? "remaining low" : "remaining";

  const initialRecharge = recharges.length > 0 ? recharges[0] : null;
  const additionalRecharges = recharges.slice(1); // everything after initial

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateStr).toLocaleDateString(undefined, options);
  };

  return (
    <div className="card">
      <h2>{platform.name}</h2>
      <p>
        <strong>Monthly Budget:</strong> ₹{platform.budget.toLocaleString()}
      </p>
      <p>
        <strong>Total Spent:</strong> ₹{totalSpent.toLocaleString()}
      </p>
      <p className={remainingClass}>
        <strong>Remaining Budget:</strong> ₹{remaining.toLocaleString()}
      </p>

      {initialRecharge && (
        <div className="initial-recharge">
          <h3>Initial Recharge:</h3>
          <p>
            {formatDate(initialRecharge.date)} — ₹{initialRecharge.amount.toLocaleString()}
          </p>
        </div>
      )}

      <div className="recharge-history">
        <h3>Additional Recharge History:</h3>
        {additionalRecharges.length > 0 ? (
          <ul>
            {additionalRecharges.map((r, idx) => (
              <li key={idx}>
                {formatDate(r.date)}: ₹{r.amount.toLocaleString()}
              </li>
            ))}
          </ul>
        ) : (
          <p>No additional recharges.</p>
        )}
      </div>
    </div>
  );
}
