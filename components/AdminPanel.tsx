"use client";
import { useEffect, useState } from "react";

export default function AdminPanel() {
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setHighlight((prev) => !prev), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      background: "#111d33",
      padding: "20px",
      borderRadius: "12px",
      width: "350px",
      color: "#fff",
      marginTop: "20px",
      textAlign: "center",
      boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)",
      transition: "all 0.3s"
    }}>
      <h2>Verity Network</h2>
      <p style={{ marginTop: "10px", fontSize: "16px", lineHeight: "1.5" }}>
        Unlock{" "}
        <span style={{
          color: highlight ? "#4facfe" : "#00f2fe",
          fontWeight: "bold",
          transition: "color 0.5s"
        }}>
          privileged access
        </span>{" "}
        to the Verity Network.<br/>
        Be among the first to explore our decentralized ecosystem.<br/>
        Early entry means{" "}
        <span style={{
          color: highlight ? "#ff6a00" : "#ee0979",
          fontWeight: "bold",
          transition: "color 0.5s"
        }}>
          exclusive opportunities
        </span>{" "}
        and insights.<br/>
        Join now and experience the future of blockchain innovation.
      </p>
    </div>
  );
}
