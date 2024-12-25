import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home page after 5 seconds
    const timer = setTimeout(() => {
      navigate("/home"); // Redirect to home page
    }, 5000); // Adjust the time as needed (5000ms = 5 seconds)

    // Cleanup timeout on component unmount
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="welcome-page d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}
    >
      <div className="text-center">
        <motion.img
          src="path_to_your_image.jpg" // Replace with the actual image URL
          alt="Bedsheets and Comforters"
          className="img-fluid"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          style={{
            borderRadius: "15px",
            maxWidth: "80%",
            marginBottom: "20px",
          }}
        />
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          style={{ fontSize: "2.5rem", color: "#333" }}
        >
          Welcome to the World of Comfort
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          style={{
            fontSize: "1.25rem",
            color: "#555",
            maxWidth: "600px",
            margin: "auto",
          }}
        >
          Discover our luxurious bedsheets and comforters designed to provide
          comfort, warmth, and style to your home. Our products are crafted with
          the finest materials to ensure a perfect night's sleep.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default WelcomePage;
