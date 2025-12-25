"use client";
import { useState, useEffect } from "react";
import { getTotalUSD, SOFTCAP } from "../lib/presale";

export const ProgressBar = () => {
  const [total, setTotal] = useState<number>(0);

  const refresh = () => setTotal(getTotalUSD());

  useEffect(() => {
    refresh();
    window.addEventListener("presale_update", refresh);
    return () => window.removeEventListener("presale_update", refresh);
  }, []);

  const percent = Math.min((total / SOFTCAP) * 100, 100);

  return (
    <div style={{ margin: "20px 0" }}>
      <div style={{ background: "#111d33", borderRadius: "8px", height: "20px", width: "300px" }}>
        <div
          style={{
            height: "100%",
            width: `${percent}%`,
            background: "linear-gradient(270deg, #4facfe, #00f2fe)",
            borderRadius: "8px",
            transition: "width 0.5s"
          }}
        />
      </div>
      <p>{total.toLocaleString()} / {SOFTCAP.toLocaleString()} USD</p>
    </div>
  );
};
