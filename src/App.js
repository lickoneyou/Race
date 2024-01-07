import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import HeaderGame from "./Components/Headers/HeaderGame";
import HeaderScore from "./Components/Headers/HeaderScore";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HeaderGame />} />
          <Route path="/score" element={<HeaderScore />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
