function TipCalculator() {
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
    </div>
  );
}

export default TipCalculator;
