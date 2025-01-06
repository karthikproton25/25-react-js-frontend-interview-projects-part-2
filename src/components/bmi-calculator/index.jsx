function BMICalculator() {
  return (
    <div className="bmi-class-container">
      <h1>BMI Calculator</h1>
      <div className="input-conatiner">
        <label>Height (cm):</label>
        <input
          onChange={(event) => setHeight(event.target.value)}
          type="number"
          value={height}
        />
      </div>
      <div className="input-container">
        <label>Weight (kg):</label>
        <input
          onChange={(event) => setWeight(event.target.value)}
          type="number"
          value={weight}
        />
      </div>
    </div>
  );
}

export default BMICalculator;
