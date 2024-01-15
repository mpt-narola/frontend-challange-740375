import React, { useState } from "react";

interface ToggleSwitchProps {
  handleToggle: (value: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ handleToggle }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const onChangeHandler = () => {
    setIsChecked((prevChecked) => !prevChecked);
    handleToggle(!isChecked);
  };

  return (
    <>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          onChange={onChangeHandler}
          // checked={isChecked}
          // value={checked}
        />
        <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className="ms-3 text-base font-normal text-[#111928] dark:text-gray-300">
          Select All
        </span>
      </label>
    </>
  );
};

export default ToggleSwitch;
