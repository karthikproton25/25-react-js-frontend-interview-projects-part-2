import DigitalClock from "./components/2. digital-clock";
import PaginationTest from "./components/1. pagination/test";
import CountdownTimerTest from "./components/3. countdown-timer/test";
import StepProgressBarTest from "./components/4. step-progress-bar/test";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="title">25 React JS Interview Projects : Part 2</h1>
      <PaginationTest />
      <DigitalClock />
      <CountdownTimerTest />
      <StepProgressBarTest />
    </div>
  );
}

export default App;
