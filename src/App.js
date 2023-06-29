import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "../src/assets/modules/Index";
import NoMatch from "../src/assets/modules/NotFound";
import About from "../src/assets/modules/pages/About/About";
import Contact from "../src/assets/modules/pages/Contact/Contact";
import "../src/dist/style.css";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </>
  );
}
