import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Politics from "./pages/Politics";
import Business from "./pages/Business";
import Technology from "./pages/Technology";
import Startup from "./pages/Startup";
import Sports from "./pages/Sports";
import World from "./pages/World";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/startup" element={<Startup />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/world" element={<World />} />
          <Route path="/politics" element={<Politics />} />
          <Route path="/business" element={<Business />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
