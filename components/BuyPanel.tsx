import { useState } from "react";
import { addBuyer } from "../lib/presale";

export const BuyPanel = () => {
  const [amount, setAmount] = useState(0);
  const [message, setMessage] = useState("");

  const handleBuy = (stablecoin: string) => {
    const wallet = "demo" + Math.random().toString(36).slice(2, 10);
    addBuyer(wallet, amount);
    window.dispatchEvent(new Event("presale_update"));
    setMessage(`You bought $${amount} worth of $VTY with ${stablecoin}!`);
    setAmount(0);
  };

  return (
    <div style={{ marginTop: "20px", textAlign: "center" }}>
      <input
        type="number"
        placeholder="Enter USD amount"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        style={{ padding: "8px", marginRight: "8px", width: "120px" }}
      />
      <button onClick={() => handleBuy("USDT")} style={{ padding: "8px 12px", marginRight: "5px" }}>
        Buy with USDT
      </button>
      <button onClick={() => handleBuy("USDC")} style={{ padding: "8px 12px" }}>
        Buy with USDC
      </button>
      {message && <p style={{ marginTop: "10px", color: "#4facfe" }}>{message}</p>}
    </div>
  );
};
