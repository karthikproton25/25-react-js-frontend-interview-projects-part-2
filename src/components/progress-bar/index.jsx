function ProgressBar() {
  return (
    <div className="progress-bar-container">
      <h1>Custom Progress Bar</h1>
      <div className="progress-bar">
        <div className="wrapper"></div>
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
