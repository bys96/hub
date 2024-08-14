import React, { useState } from "react";

interface ToggleButtonsProps {
  onToggle: (selected: string) => void;
}

const ToggleButtons: React.FC<ToggleButtonsProps> = ({ onToggle }) => {
  const [selected, setSelected] = useState("전체");

  const handleClick = (option: string) => {
    setSelected(option);
    onToggle(option);
  };

  return (
    <div className="flex space-x-4 my-4">
      {["전체", "브레인스토밍챗", "칸반보드"].map((option) => (
        <button
          key={option}
          onClick={() => handleClick(option)}
          className={`px-4 py-2 rounded ${
            selected === option
              ? "bg-red-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default ToggleButtons;
