import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ResetPassword from "./components/ResetPassword";
import Signup from "./pages/Signup";
import AdminPanel from "./pages/AdminPanel";
import Collection from "./pages/Collection";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";


// Importing styles and scripts
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "boxicons/css/boxicons.min.css";
import "./App.css";
import { AnimatePresence } from "framer-motion";

// React Toastify imports
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forget-password" element={<ResetPassword />} /> {/* Add this route */}
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/admin-panel" element={<AdminPanel />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/products/:id" element={<ProductDetails />} /> {/* Route for product details */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      )}
      <Footer />
      {/* React Toastify container */}
      <ToastContainer 
      position="bottom-right"
      autoClose={3000} // auto-close duration in ms
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      draggable
      pauseOnHover={false}
      />
    </div>
  );
};

export default App;
