import { useState } from "react";

function BMICalculator() {
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [bmi, setBMI] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  function calculateBmi() {
    if (!height || !weight) {
      setErrorMsg("Please enter both height and weight");
      return;
    }
  }

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
      <button onClick={calculateBmi}>Calculate BMI</button>
    </div>
  );
}

export default BMICalculator;
