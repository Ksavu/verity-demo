"use client";
import { useState } from "react";
import { addBuyer } from "../lib/presale";
import usdtIcon from "../public/usdt.png";
import usdcIcon from "../public/usdc.png";

export const BuyPanel = ({ wallet }: { wallet: string | null }) => {
  const [amount, setAmount] = useState(0);
  const [message, setMessage] = useState("");

  const handleBuy = (stablecoin: "USDT" | "USDC") => {
    if (!wallet) return setMessage("Connect wallet first!");
    addBuyer(wallet, amount);
    setMessage(`You bought $${amount} $VTY with ${stablecoin}`);
    setAmount(0);
  };

  return (
    <div style={{
      background: "#111d33",
      padding: "30px",
      borderRadius: "12px",
      textAlign: "center",
      width: "300px",
      boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)",
      marginBottom: "20px"
    }}>
      <input
        type="number"
        placeholder="Enter USD amount"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        style={{
          width: "80%",
          padding: "8px",
          margin: "10px 0",
          borderRadius: "6px",
          border: "1px solid #4facfe"
        }}
      />

      <div style={{ display: "flex", justifyContent: "space-around", marginTop: "10px" }}>
        <button
          onClick={() => handleBuy("USDT")}
          style={{
            padding: "8px 12px",
            background: "#26a17b",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            color: "#fff",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: "6px"
          }}
        >
          <img src={usdtIcon.src} alt="USDT" style={{ width: "20px" }} />
          USDT
        </button>

        <button
          onClick={() => handleBuy("USDC")}
          style={{
            padding: "8px 12px",
            background: "#2775ca",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            color: "#fff",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: "6px"
          }}
        >
          <img src={usdcIcon.src} alt="USDC" style={{ width: "20px" }} />
          USDC
        </button>
      </div>

      {message && <p style={{ marginTop: "15px", color: "#4facfe" }}>{message}</p>}
    </div>
  );
};
