import { useState } from "react";

export const WalletConnect = ({ onConnect }: { onConnect: (wallet: string) => void }) => {
  const [wallet, setWallet] = useState<string | null>(null);

  const connectWallet = () => {
    const demoWallet = "0x" + Math.random().toString(36).substring(2, 10) + "..." + Math.random().toString(36).substring(2, 6);
    setWallet(demoWallet);
    onConnect(demoWallet);
  };

  return (
    <div style={{ marginBottom: "20px", textAlign: "center" }}>
      {wallet ? (
        <p style={{ color: "#4facfe" }}>Connected wallet: <b>{wallet}</b></p>
      ) : (
        <button
          onClick={connectWallet}
          style={{
            padding: "10px 20px",
            background: "linear-gradient(270deg, #4facfe, #00f2fe)",
            border: "none",
            borderRadius: "8px",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
            marginBottom: "20px"
          }}
        >
          Connect Wallet (Demo)
        </button>
      )}
    </div>
  );
};
