import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import HeaderGame from "./Components/Headers/HeaderGame";
import HeaderScore from "./Components/Headers/HeaderScore";
import MainGame from "./Components/Main/MainGame/MainGame";
import MainScore from "./Components/Main/MainScore/MainScore";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={[
              <HeaderGame key="HeaderGame" />,
              <MainGame key="MainGame" />,
            ]}
          />
          <Route
            path="/score"
            element={[
              <HeaderScore key="HeaderScore" />,
              <MainScore key="MainScore" />,
            ]}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
