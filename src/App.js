import "./App.css";
import Home from "./pages/Home";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

function App() {
  return (
    <div className="w-screen min-h-screen bg-black flex flex-col font-inter">
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
