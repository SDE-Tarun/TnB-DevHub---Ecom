import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminPanel from "./pages/AdminPanel";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import WelcomePage from "./components/WelcomePage"; // Import the WelcomePage component

// Importing styles and scripts
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "boxicons/css/boxicons.min.css";
import "./App.css";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Trigger loading state on route change
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); // Simulate loader delay

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="App">
      <Navbar />
      {loading ? (
        <Loader />
      ) : (
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<WelcomePage />} /> {/* Welcome page first */}
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/admin-panel" element={<AdminPanel />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      )}
      <Footer />
    </div>
  );
};

export default App;
