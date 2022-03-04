import EstilosGlobales from "./theme/global";

import Header from "./components/Header/Header";
import Clock from "./components/Clock/Clock";
import CountDown from "./components/CountDown/CountDown";
import StopWatch from "./components/StopWatch/StopWatch";

function App() {
  return (
    <div className="App">
    <EstilosGlobales/>
    <Header/>
    <Clock/>
    <StopWatch/>
    <CountDown/>
    </div>
  );
}

export default App;
