import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Fetchuser from "./Components/Fetchuser";
import LongestChain from "./Components/LongestChain";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Fetchuser />
      <h1 className="text-center text-2xl font-bold mt-4">Vrit Home Task 3</h1>
      <LongestChain />
    </>
  );
}

export default App;
