import { useEffect, useState } from "react";
import { getTotalUSD } from "../lib/presale";

const TARGET = 10000; // demo cilj u USD

export const ProgressBar = () => {
  const [total, setTotal] = useState(0);

  const refresh = () => setTotal(getTotalUSD());

  useEffect(() => {
    refresh();
    window.addEventListener("presale_update", refresh);
    return () => window.removeEventListener("presale_update", refresh);
  }, []);

  const progress = Math.min((total / TARGET) * 100, 100);

  return (
    <div style={{ width: "100%", background: "#222", borderRadius: "8px", overflow: "hidden", height: "24px" }}>
      <div style={{ width: `${progress}%`, background: "#4facfe", height: "100%", transition: "width 0.5s" }} />
      <p style={{ textAlign: "center", marginTop: "4px" }}>{total} / {TARGET} USD</p>
    </div>
  );
};
