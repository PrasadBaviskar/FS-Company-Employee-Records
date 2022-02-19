// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Dashboard } from "./Components/Dashboard";
import { Homepage } from "./Components/Homepage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
