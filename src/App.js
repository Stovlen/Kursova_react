import "./styles/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home/Home";
import Repair from "./pages/Repair/Repair";
import Oformlennya from "./pages/Oformlennya/Oformlennya";
import Result from "./pages/Result/Result";
import ScrollToTop from "./utils/scrollToTop";
import Orders from "./pages/Orders/Orders";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/repair" element={<Repair />} />
          <Route path="/oformlennya" element={<Oformlennya />} />
          <Route path="/result" element={<Result />} />
          <Route path="/orders" element={<Orders />} />         
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
