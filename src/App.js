import React from "react";
import logo from "./menre_logo.png";

export default function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <header style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <img src={logo} alt="MENRE Logo" style={{ width: "50px", marginRight: "10px" }} />
        <h1>MENRE Tawi-Tawi Energy Dashboard</h1>
      </header>

      <div style={{ display: "grid", gap: "10px" }}>
        <div style={{ padding: "10px", backgroundColor: "#a7f3d0" }}>Total Generation: 4,250 kW</div>
        <div style={{ padding: "10px", backgroundColor: "#a7f3d0" }}>Active Projects: 7</div>
        <div style={{ padding: "10px", backgroundColor: "#fca5a5" }}>Outstanding Tickets: 3</div>
      </div>

      <footer style={{ marginTop: "20px", fontSize: "12px", color: "#555" }}>
        © {new Date().getFullYear()} MENRE – Tawi-Tawi
      </footer>
    </div>
  );
                    }
