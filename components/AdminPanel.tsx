import { useState, useEffect } from "react";
import { getBuyers, Buyer } from "../lib/presale";

export default function AdminPanel() {
  const [buyers, setBuyers] = useState<Buyer[]>([]);

  const refresh = () => setBuyers(getBuyers());

  useEffect(() => {
    refresh();
    window.addEventListener("presale_update", refresh);
    return () => window.removeEventListener("presale_update", refresh);
  }, []);

  return (
    <div style={{ background: "#111d33", padding: "20px", borderRadius: "12px", width: "350px", color: "#fff", marginTop: "20px" }}>
      <h2>Admin Panel</h2>
      {buyers.map((b, i) => (
        <div key={i}>
          {b.wallet.slice(0, 8)}...{b.wallet.slice(-4)} — {b.amountUSD} USD
        </div>
      ))}
    </div>
  );
}
