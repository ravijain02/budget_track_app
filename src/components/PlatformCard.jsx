export default function PlatformCard({ platform }) {
    console.log(platform, "kk")
  const recharges = platform.recharges || [];

  const initialRecharge = recharges.length > 0 ? recharges[0] : null;
  const additionalRecharges = recharges.slice(1);
  const date = platform.createdAt

  const totalSpent = recharges.reduce((sum, r) => sum + r.amount, 0);
  const remaining = platform.budget - totalSpent;

  return (
    <div className="platform-card">
      <h3>{platform.name}</h3>
      <p><strong>Monthly Budget:</strong> ₹{platform.budget}</p>
      <p><strong>Total Spent:</strong> ₹{totalSpent}</p>
      <p><strong>Date:</strong>{date}</p>
      <p><strong>Remaining:</strong> ₹{remaining}</p>

      {initialRecharge && (
        <>
          <h4>Initial Recharge</h4>
          <p><strong>Amount:</strong> ₹{initialRecharge.amount}</p>
          <p><strong>Date:</strong> {initialRecharge.date}</p>
        </>
      )}

      {additionalRecharges.length > 0 && (
        <>
          <h4>Additional Recharges:</h4>
          <ul>
            {additionalRecharges.map((r, idx) => (
              <li key={idx}>
                {r.date} — ₹{r.amount}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
