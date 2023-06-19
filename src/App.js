import "./App.css";
import { Routes, Route } from "react-router-dom";

// IMPORT COMPONENTS
import Navbar from "./components/Navbar";

// IMPORT PAGES
import Home from "./pages/Home";
import Paint from "./pages/Paint";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paint" element={<Paint />} />
      </Routes>
    </>
  );
}
export default App;
