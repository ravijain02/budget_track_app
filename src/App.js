import React, { useState } from "react";
import AddPlatformForm from "./components/AppPlatformForm";
import RechargeForm from "./components/RechargeForm";
import PlatformCard from "./components/PlatformCard";
import "./App.css"

export default function App() {
  const [platforms, setPlatforms] = useState([]);

  const addPlatform = (platform) => {
    setPlatforms((prev) => [...prev, { ...platform, recharges: [] }]);
  };

  const addRecharge = (platformName, recharge) => {
    setPlatforms((prev) =>
      prev.map((p) =>
        p.name === platformName
          ? { ...p, recharges: [...p.recharges, recharge] }
          : p
      )
    );
  }

  return (
    <div className="container">
      <h1>Budget Tracker</h1>
      
      <div className="forms-wrapper">
        <AddPlatformForm onAdd={addPlatform} />
        <RechargeForm platforms={platforms} onRecharge={addRecharge} />
      </div>

      <div className="platforms">
        {platforms.map((platform, idx) => (
          <PlatformCard key={idx} platform={platform} />
        ))}
      </div>
    </div>
  );
}

