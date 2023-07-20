import "./App.css";
import { Routes, Route } from "react-router-dom";

// IMPORT COMPONENTS
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

// IMPORT PAGES
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Paint from "./pages/PaintPage";

function App() {
  return (
    <div>
      <Navbar />
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paint" element={<Paint />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Sidebar>
      <Footer />
    </div>
  );
}
export default App;
