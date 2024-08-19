import { useEffect, useState } from "react";

function LongestConsecutiveChain({ numbers }) {
  const [longestChain, setLongestChain] = useState(0);

  const findLongestConsecutiveChain = (arr) => {
    if (arr.length === 0) return 0;

    const numSet = new Set(arr);
    let longestChain = 0;

    for (const num of numSet) {
      if (!numSet.has(num - 1)) {
        let currentNum = num;
        let currentChainLength = 1;

        while (numSet.has(currentNum + 1)) {
          currentNum += 1;
          currentChainLength += 1;
        }

        longestChain = Math.max(longestChain, currentChainLength);
      }
    }

    return longestChain;
  };
  useEffect(() => {
    setLongestChain(findLongestConsecutiveChain(numbers));
  }, [numbers]);

  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl"> Longest Consecutive Chain</h2>
      <p className="text-xl font-semibold">
        The length of the longest chain of consecutive numbers is:{" "}
        {longestChain}
      </p>
    </div>
  );
}

export default LongestConsecutiveChain;
