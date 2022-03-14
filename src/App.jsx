import EstilosGlobales from "./theme/global";

import Home from "./components/home/Home";
import Weather from "./components/Weather/Weather";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
 
 <EstilosGlobales />
     <Router>
        <Routes>
        <Route path= "/" element={<Home/>} />
          <Route path="Weather/:cname" element={<Weather />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
