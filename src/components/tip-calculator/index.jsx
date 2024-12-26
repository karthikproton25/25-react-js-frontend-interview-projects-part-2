import { useState } from "react";

function TipCalculator() {
  const [billAmount, setBillAmount] = useState(null);
  const [tipPercentage, setTipPercentage] = useState(10);
  const [splitCount, setSplitCount] = useState(1);
  const [tipAmount, setAmount] = useState(0);

  return (
    <div className="tip-calculator">
      <h1>TipCalculator</h1>
      <div className="input-container">
        <label>Bill Amount:</label>
        <input type="number" />
      </div>
      <div className="input-container">
        <label>Tip Percentage:</label>
        <input type="number" />
      </div>
      <div className="input-container">
        <label>Number Of People:</label>
        <input type="number" />
      </div>
      <button>Calculate Tip</button>
    </div>
  );
}

export default TipCalculator;
