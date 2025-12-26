"use client";
import { useState } from "react";
import { addBuyer, MIN_BUY, MAX_BUY } from "../lib/presale";

export const BuyPanel = ({ wallet }: { wallet: string | null }) => {
  const [amount, setAmount] = useState(0);
  const [referral, setReferral] = useState("");
  const [message, setMessage] = useState("");

  const handleBuy = (stablecoin: string) => {
    if (!wallet) return setMessage("Connect wallet first!");
    if (!referral) return setMessage("Referral code is required!");
    if (amount < MIN_BUY || amount > MAX_BUY)
      return setMessage(`Amount must be between ${MIN_BUY} and ${MAX_BUY} USD`);

    addBuyer(wallet, amount, referral); // referral se prosleđuje, ali se ne prikazuje
    setMessage(`You bought $${amount} $VTY with ${stablecoin}`);
    setAmount(0);
    setReferral("");
  };

  return (
    <div style={{
      background: "#111d33",
      padding: "30px",
      borderRadius: "12px",
      textAlign: "center",
      width: "320px",
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
      
      <input
        type="text"
        placeholder="Enter referral code"
        value={referral}
        onChange={(e) => setReferral(e.target.value)}
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
            background: "#26A17B",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            color: "#fff",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: "5px"
          }}
        >
          <img src="/usdt.png" alt="USDT" style={{ width: "16px", height: "16px" }} />
          Buy with USDT
        </button>

        <button
          onClick={() => handleBuy("USDC")}
          style={{
            padding: "8px 12px",
            background: "#1E90FF",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            color: "#fff",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: "5px"
          }}
        >
          <img src="/usdc.png" alt="USDC" style={{ width: "16px", height: "16px" }} />
          Buy with USDC
        </button>
      </div>

      {message && <p style={{ marginTop: "15px", color: "#4facfe" }}>{message}</p>}
    </div>
  );
};
