import "./App.css";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { NotFound } from "./App/NotFound";
import { DrumKit } from "./App/DrumKit";
import { Dashboard } from "./App/Dashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="dashboard" />} />
        <Route path="dashboard/*" element={<Dashboard />} />
        <Route path="drum-kit/*" element={<DrumKit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
