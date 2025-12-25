import { useState } from "react";
import { WalletConnect } from "../components/WalletConnect";
import { ProgressBar } from "../components/ProgressBar";
import { BuyPanel } from "../components/BuyPanel";
import AdminPanel from "../components/AdminPanel";

export default function Home() {
  const [wallet, setWallet] = useState<string | null>("xgvdjxb2324...kjckf"); // demo wallet

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
      <h1 style={{ marginBottom: "10px" }}>$VTY Token Presale</h1>
      <p style={{ marginBottom: "30px", fontSize: "18px" }}>1 $VTY = 1 USD</p>

      <WalletConnect onConnect={(w) => setWallet(w)} />

      <ProgressBar />

      <BuyPanel wallet={wallet} />

      <AdminPanel />
    </div>
  );
}
