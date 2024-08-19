import React, { useState } from "react";
import LongestConsecutiveChain from "./LongestConsecutiveChain";

const LongestChain = () => {
  const [numbers, setNumbers] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    const parsedNumbers = value
      .split(",")
      .map((num) => parseInt(num.trim(), 10))
      .filter((num) => !isNaN(num));
    setNumbers(parsedNumbers);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center text-xl font-bold mt-4">
        Consecutive Chain Finder
      </h1>
      <input
        type="text"
        placeholder="Enter numbers i.e. Arrays Elements separated by commas"
        onChange={handleInputChange}
        className="border-2 border-gray-400 p-3 rounded-md w-1/2 mt-4"
      />
      <LongestConsecutiveChain numbers={numbers} />
    </div>
  );
};

export default LongestChain;
