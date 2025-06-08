export default function PlatformCard({ platform }) {
  const recharges = platform.recharges || [];
  const additionalRecharges = recharges
  const date = platform.createdAt;

  const totalSpent = recharges.reduce((sum, r) => sum + r.amount, 0);
  const remaining = platform.budget - totalSpent;

  return (
    <div className="platform-card">
      <h3>{platform.name}</h3>
      <p><strong>Created At:</strong> {date}</p>
      <p><strong>Monthly Budget:</strong> Rs. {platform.budget}</p>
      <p><strong>Total Spent:</strong> Rs. {totalSpent}</p>
      <p><strong>Remaining:</strong> Rs. {remaining}</p>

      {additionalRecharges.length > 0 && (
        <>
          <h4>Recharge History</h4>
          <ul>
            {additionalRecharges.map((r, idx) => (
              <li
                key={idx}
                style={{
                  backgroundColor: "#f0f9ff",
                  border: "1px solid #b6e0fe",
                  padding: "8px",
                  marginBottom: "6px",
                  borderRadius: "4px"
                }}
              >
                <strong>Date:</strong> {r.date} &nbsp;&nbsp;
                <strong>Amount:</strong> Rs. {r.amount}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
