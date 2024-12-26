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
        <input
          onChange={(event) => setBillAmount(event.target.value)}
          value={billAmount}
          type="number"
        />
      </div>
      <div className="input-container">
        <label>Tip Percentage:</label>
        <input
          onChange={(event) => setTipPercentage(event.target.value)}
          value={tipPercentage}
          type="number"
        />
      </div>
      <div className="input-container">
        <label>Number Of People:</label>
        <input
          onChange={(event) => setSplitCount(event.target.value)}
          value={splitCount}
          type="number"
        />
      </div>
      <button onClick={handleCalculteTip}>Calcuate Tip</button>
    </div>
  );
}

export default TipCalculator;
