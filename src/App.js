import "./App.css";
import { Routes, Route } from "react-router-dom";

// IMPORT COMPONENTS
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

// IMPORT PAGES
import Home from "./pages/Home";
import Paint from "./pages/Paint";

function App() {
  return (
    <div>
      <Navbar />
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paint" element={<Paint />} />
        </Routes>
      </Sidebar>
    </div>
  );
}
export default App;
