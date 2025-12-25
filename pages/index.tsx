import AdminPanel from "../components/AdminPanel";
import { BuyPanel } from "../components/BuyPanel";
import { ProgressBar } from "../components/ProgressBar";

export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#0a0f25", minHeight: "100vh", color: "#fff", display: "flex", flexDirection: "column", alignItems: "center", padding: "40px 20px" }}>
      <img src="/logo.jpg" alt="Verity Logo" style={{ width: "150px", marginBottom: "30px" }} />
      <h1 style={{ marginBottom: "20px" }}>Verity Coin Presale</h1>

      <div style={{ width: "80%", maxWidth: "400px", marginBottom: "30px" }}>
        <ProgressBar />
      </div>

      <BuyPanel />

      <div style={{ width: "80%", maxWidth: "400px", marginTop: "40px" }}>
        <AdminPanel />
      </div>
    </div>
  );
}
