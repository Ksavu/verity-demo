import { useEffect, useState } from "react";
import { getBuyers, Buyer } from "../lib/presale";

export default function AdminPanel() {
  const [buyers, setBuyers] = useState<Buyer[]>([]);

  const refresh = () => setBuyers(getBuyers());

  useEffect(() => {
    refresh();
    window.addEventListener("presale_update", refresh);
    return () => window.removeEventListener("presale_update", refresh);
  }, []);

  const shorten = (address: string) =>
    address.slice(0, 4) + "..." + address.slice(-4);

  return (
    <div style={{ background: "#111d33", padding: "20px", borderRadius: "12px", color: "#fff" }}>
      <h2>Admin Panel</h2>
      {buyers.length === 0 && <p>No purchases yet.</p>}
      {buyers.map((b, i) => (
        <div key={i}>
          {shorten(b.address)} — ${b.amountUSD}
        </div>
      ))}
    </div>
  );
}
