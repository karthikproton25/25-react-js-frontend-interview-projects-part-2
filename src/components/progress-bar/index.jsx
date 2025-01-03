import { eventWrapper } from "@testing-library/user-event/dist/utils";
import { useState } from "react";

function ProgressBar() {
  const [progressPercent, setProgressPercent] = useState(0);

  return (
    <div className="progress-bar-container">
      <h1>Custom Progress Bar</h1>
      <div className="progress-bar">
        <div className="wrapper">
          {progressPercent >= 0 && progressPercent <= 100 ? (
            <div
              style={{ width: `${progressPercent}%` }}
              className="innerWrapper"
            >
              {progressPercent}
            </div>
          ) : (
            <p>{errorMsg}</p>
          )}
        </div>
      </div>
      <div className="input-container">
        <label>Input Percentage :</label>
        <input
          onChange={handleProgressPercentage}
          type="number"
          value={progressPercent}
        />
      </div>
    </div>
  );
}
export default ProgressBar;
