import { useState } from "react";

export default function Home() {
  const [amount, setAmount] = useState(0);
  const [message, setMessage] = useState("");

  const handleBuy = (stablecoin: string) => {
    setMessage(`You bought $${amount} worth of $VTY with ${stablecoin}!`);
    setAmount(0);
  };

  return (
    <div style={{
      fontFamily: "Arial, sans-serif",
      background: "#0a0f25",
      minHeight: "100vh",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "40px 20px"
    }}>
      <img src="/logo.jpg" alt="Verity Logo" style={{ width: "150px", marginBottom: "30px" }} />
      <h1 style={{ marginBottom: "20px" }}>$VTY Token Presale</h1>

      <div style={{
        background: "#111d33",
        padding: "30px",
        borderRadius: "12px",
        textAlign: "center",
        width: "300px",
        boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)"
      }}>
        <h2>$VTY</h2>
        <p style={{ fontSize: "18px" }}>Price: 1 USD</p>

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
              background: "linear-gradient(270deg, #4facfe, #00f2fe)",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              color: "#fff",
              fontWeight: "bold"
            }}
          >
            Buy with USDT
          </button>

          <button
            onClick={() => handleBuy("USDC")}
            style={{
              padding: "8px 12px",
              background: "linear-gradient(270deg, #ff6a00, #ee0979)",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              color: "#fff",
              fontWeight: "bold"
            }}
          >
            Buy with USDC
          </button>
        </div>

        {message && <p style={{ marginTop: "15px", color: "#4facfe" }}>{message}</p>}
      </div>
    </div>
  );
}
