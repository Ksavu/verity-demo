"use client";
import { useState } from "react";
import { addBuyer } from "../lib/presale";

const MIN_BUY = 50;
const MAX_BUY = 20000;
const REFERRAL_PERCENT = 10;

export const BuyPanel = ({ wallet }: { wallet: string | null }) => {
  const [amount, setAmount] = useState(0);
  const [referral, setReferral] = useState("");
  const [message, setMessage] = useState("");

  const handleBuy = (stablecoin: string) => {
    if (!wallet) {
      setMessage("Connect wallet first!");
      return;
    }

    if (amount < MIN_BUY) {
      setMessage(`Minimum buy is $${MIN_BUY}`);
      return;
    }

    if (amount > MAX_BUY) {
      setMessage(`Maximum buy is $${MAX_BUY}`);
      return;
    }

    const referralReward = referral
      ? (amount * REFERRAL_PERCENT) / 100
      : 0;

    addBuyer(wallet, amount, referral); // demo – kasnije on-chain

    setMessage(
      referral
        ? `You bought $${amount} $VTY with ${stablecoin}. Referral earns $${referralReward}.`
        : `You bought $${amount} $VTY with ${stablecoin}`
    );

    setAmount(0);
    setReferral("");
  };

  return (
    <div
      style={{
        background: "#111d33",
        padding: "30px",
        borderRadius: "12px",
        textAlign: "center",
        width: "320px",
        boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)",
        marginBottom: "20px"
      }}
    >
      {/* AMOUNT */}
      <input
        type="number"
        placeholder={`Enter USD amount (${MIN_BUY}–${MAX_BUY})`}
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

      <p style={{ fontSize: "12px", opacity: 0.7 }}>
        Min: ${MIN_BUY} • Max: ${MAX_BUY}
      </p>

      {/* REFERRAL */}
      <input
        type="text"
        placeholder="Referral code (optional)"
        value={referral}
        onChange={(e) => setReferral(e.target.value)}
        style={{
          width: "80%",
          padding: "8px",
          marginTop: "10px",
          borderRadius: "6px",
          border: "1px solid #4facfe"
        }}
      />

      <p style={{ fontSize: "12px", opacity: 0.7 }}>
        Referral reward: {REFERRAL_PERCENT}%
      </p>

      {/* BUY BUTTONS */}
      <div style={{ display: "flex", justifyContent: "space-around", marginTop: "15px" }}>
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

      {message && (
        <p style={{ marginTop: "15px", color: "#4facfe" }}>
          {message}
        </p>
      )}
    </div>
  );
};
