import DigitalClock from "./components/2. digital-clock";
import PaginationTest from "./components/1. pagination/test";
import CountdownTimerTest from "./components/3. countdown-timer/test";
import StepProgressBarTest from "./components/4. step-progress-bar/test";
import RandomQuoteGenerator from "./components/5. random-quote-generator";
import TooltipTest from "./components/6. Tooltip/test";
import CurrencyConverter from "./components/7. currency-converter";
import FilterProducts from "./components/8. filter-products";
import TipCalculator from "./components/tip-calculator";
import MusicPlayer from "./components/10. music-player";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="title">25 React JS Interview Projects : Part 2</h1>
      <PaginationTest />
      <DigitalClock />
      <CountdownTimerTest />
      <StepProgressBarTest />
      <RandomQuoteGenerator />
      <TooltipTest />
      <CurrencyConverter />
      <FilterProducts />
      <TipCalculator />
      <MusicPlayer />
    </div>
  );
}

export default App;
