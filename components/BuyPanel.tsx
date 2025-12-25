"use client";
import { useState } from "react";
import { addBuyer } from "../lib/presale";

const maskWallet = (wallet: string) => {
  if (wallet.length < 10) return wallet;
  return `${wallet.slice(0, 6)}....${wallet.slice(-4)}`;
};

export const BuyPanel = ({ wallet }: { wallet: string | null }) => {
  const [amount, setAmount] = useState(0);
  const [message, setMessage] = useState("");

  const handleBuy = (stablecoin: string) => {
    if (!wallet) return setMessage("Connect wallet first!");
    if (amount <= 0) return;

    addBuyer(maskWallet(wallet), amount);

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
        <button onClick={() => handleBuy("USDT")}>Buy with USDT</button>
        <button onClick={() => handleBuy("USDC")}>Buy with USDC</button>
      </div>

      {message && <p style={{ marginTop: "15px", color: "#4facfe" }}>{message}</p>}
    </div>
  );
};
