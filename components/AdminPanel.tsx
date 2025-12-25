"use client";
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
    <div style={{
      background: "#111d33",
      padding: "20px",
      borderRadius: "12px",
      width: "350px",
      color: "#fff",
      marginTop: "20px",
      boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)"
    }}>
      <h2 style={{ marginBottom: "15px" }}>Admin Panel</h2>
      {buyers.length === 0 && <p>No purchases yet</p>}
      {buyers.map((b, i) => (
        <div key={i} style={{ marginBottom: "8px" }}>
          {b.wallet.slice(0, 8)}...{b.wallet.slice(-4)} — ${b.amountUSD} USD
        </div>
      ))}
    </div>
  );
}
