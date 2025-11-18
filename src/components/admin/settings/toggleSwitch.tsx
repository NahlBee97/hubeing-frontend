import React from "react";

interface ToggleSwitchProps {
  label: string;
  description: string;
  enabled: boolean;
  setEnabled: (enabled: boolean) => void;
}

const switchOuterBaseStyle: React.CSSProperties = {
  position: "relative",
  display: "flex",
  height: "31px",
  width: "51px",
  cursor: "pointer",
  alignItems: "center",
  borderRadius: "9999px",
  border: "none",
  padding: "2px", // p-0.5
  transition: "background-color 0.2s ease-in-out",
};

const switchInnerStyle: React.CSSProperties = {
  height: "27px",
  width: "27px",
  borderRadius: "9999px",
  backgroundColor: "white",
  boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 8px, rgba(0, 0, 0, 0.06) 0px 3px 1px",
  transition: "transform 0.2s ease-in-out",
};

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  label,
  description,
  enabled,
  setEnabled,
}) => {
  // Combine base styles with state-dependent styles
  const outerStyle = {
    ...switchOuterBaseStyle,
    backgroundColor: enabled ? "#3df56b" : "#22492c",
    justifyContent: enabled ? "flex-end" : "flex-start",
  };

  return (
    <div className="flex items-center gap-4 bg-[#102315] px-4 py-2 min-h-[72px] justify-between">
      <div className="flex flex-col justify-center">
        <p className="text-base text-white font-medium leading-normal line-clamp-1">
          {label}
        </p>
        <p className="text-[#90cb9f] text-sm font-normal leading-normal line-clamp-2">
          {description}
        </p>
      </div>
      <div className="shrink-0">
        <label style={outerStyle}>
          <div style={switchInnerStyle}></div>
          <input
            type="checkbox"
            className="hidden absolute"
            checked={enabled}
            onChange={() => setEnabled(!enabled)}
          />
        </label>
      </div>
    </div>
  );
};
