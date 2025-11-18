"use client"

import { useState } from "react";
import { ToggleSwitch } from "./toggleSwitch";

export const SettingsPage = () => {
  const [allowBookings, setAllowBookings] = useState<boolean>(false);

  const handleSave = () => {
    // Logic to save settings
    console.log("Settings saved:", { allowBookings });
    // In a real app, you might show a confirmation message
  };

  return (
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <p className="text-white tracking-light text-3xl md:text-[32px] font-bold leading-tight min-w-72">
          Settings
        </p>
      </div>

      <ToggleSwitch
        label="Allow New Patient Bookings"
        description="Allow new patients to book appointments"
        enabled={allowBookings}
        setEnabled={setAllowBookings}
      />

      <div className="flex px-4 py-3 justify-end">
        <button
          onClick={handleSave}
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#3df56b] text-[#102315] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-80"
        >
          <span className="truncate">Save Settings</span>
        </button>
      </div>
    </div>
  );
};
