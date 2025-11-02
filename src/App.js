import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import logo from "./menre_logo.png"; // Upload your MENRE logo here

const assets = [
  { id: "A-001", name: "Barangay Solar 10kW", type: "Solar", lat: 6.9, lon: 121.0, capacity: 10, status: "Operational" },
  { id: "A-002", name: "Feeder Transformer 100kVA", type: "Transformer", lat: 6.97, lon: 120.95, capacity: 100, status: "Needs Inspection" },
  { id: "A-003", name: "Micro-hydro Site", type: "Hydro", lat: 6.86, lon: 121.02, capacity: 50, status: "Operational" }
];

function DashboardCard({ title, value, color }) {
  return (
    <div className="p-4 bg-white rounded-2xl shadow text-center border-t-4 border-menreGreen">
      <div className="text-sm text-gray-600">{title}</div>
      <div className={`text-2xl font-bold ${color}`}>{value}</div>
    </div>
  );
}

export default function App() {
  return (
    <div className="p-6 min-h-screen bg-gradient-to-b from-menreLight to-white">
      <header className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="MENRE Logo" className="h-12 w-12 rounded-full border border-menreGreen shadow" />
          <div>
            <h1 className="text-2xl font-bold text-menreGreen">Provincial Energy Management Dashboard</h1>
            <p className="text-sm text-gray-600">MENRE – Tawi-Tawi</p>
          </div>
        </div>
        <button className="px-4 py-2 rounded-lg bg-menreGreen text-white font-semibold shadow hover:bg-green-800">
          Report Issue
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <DashboardCard title="Total Generation (kW)" value="4,250" color="text-menreGreen" />
        <DashboardCard title="Active Projects" value="7" color="text-menreGreen" />
        <DashboardCard title="Outstanding Tickets" value="3" color="text-red-600" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <section className="md:col-span-2 bg-white p-4 rounded-2xl shadow border-l-4 border-menreGreen">
          <h2 className="text-lg font-semibold text-menreGreen mb-3">Energy Assets Map</h2>
          <MapContainer center={[6.9, 121.0]} zoom={9} style={{ height: "400px" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {assets.map((a) => (
              <Marker key={a.id} position={[a.lat, a.lon]}>
                <Popup>
                  <strong>{a.name}</strong><br />
                  {a.type} • {a.capacity} kW<br />
                  Status: <span className="font-semibold">{a.status}</span>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </section>

        <aside className="bg-white rounded-2xl shadow p-4 border-l-4 border-menreGreen">
          <h3 className="font-semibold text-menreGreen mb-3">Asset Register</h3>
          <ul className="space-y-2">
            {assets.map((a) => (
              <li key={a.id} className="p-3 border rounded flex justify-between items-center">
                <div>
                  <div className="text-sm font-semibold">{a.name}</div>
                  <div className="text-xs text-gray-500">
                    {a.type} • {a.capacity} kW
                  </div>
                </div>
                <div
                  className={`text-xs px-2 py-1 rounded-full text-white ${
                    a.status === "Operational" ? "bg-green-600" : "bg-orange-500"
                  }`}
                >
                  {a.status}
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <footer className="mt-8 text-xs text-center text-gray-600">
        © {new Date().getFullYear()} MENRE – Tawi-Tawi | Provincial Energy Management Dashboard
      </footer>
    </div>
  );
}
