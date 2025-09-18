import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { Header } from './Pages/Common/Header'
import { Footer } from './Pages/Common/Footer'
import { Home } from './Pages/Home'
import { About } from './Pages/About'
import { Contact } from './Pages/Contact'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Premium } from "./Pages/Premium";
import { Songs } from "./Pages/Songs";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // animation lasts 1s, runs once
  }, []);
  return (
    <Router>
      <Header />   {/* Common Header */}
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/songs" element={<Songs />} />
        </Routes>
      </main>
      
      <Footer />   {/* Common Footer */}
    </Router>
  )
}

export default App
