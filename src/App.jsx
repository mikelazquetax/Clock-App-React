import EstilosGlobales from "./theme/global";

import Header from "./components/Header/Header";
import Clock from "./components/Clock/Clock";
import CountDown from "./components/CountDown/CountDown";
import StopWatch from "./components/StopWatch/StopWatch";
import Weather from "./components/Weather/Weather";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
 
    <Router>
    <EstilosGlobales/>
      <Header/>
      <Clock/>
      <StopWatch/>
      <CountDown/>
      <Routes>
     
    <Route path="Weather" element={<Weather/>}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
