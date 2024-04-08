import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { NotFound } from "./App/NotFound";
import { DrumKit } from "./App/DrumKit";
import { Dashboard } from "./App/Dashboard";
import { Clock } from "./App/Clock";
import { CSSVariablesAndJS } from "./App/CSSVariablesAndJS";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="thirty-JS-Challenges/" element={<Dashboard />} />
        <Route
          path="thirty-JS-Challenges/dashboard/*"
          element={<Dashboard />}
        />
        <Route path="thirty-JS-Challenges/drum-kit/*" element={<DrumKit />} />
        <Route path="thirty-JS-Challenges/clock/*" element={<Clock />} />
        <Route
          path="thirty-JS-Challenges/css-variables-and-js/*"
          element={<CSSVariablesAndJS />}
        />
        <Route path="thirty-JS-Challenges/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
