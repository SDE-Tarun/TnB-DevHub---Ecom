import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./WelcomePage.css"; // Add custom styles for the page

const WelcomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home page after 5 seconds
    const timer = setTimeout(() => {
      navigate("/home"); // Redirect to home page
    }, 7000); // 7 seconds

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
    >
      <div className="text-center welcome-content">
        <motion.img
          src="https://bestanimations.com/media/funny-christmas/998587553funny-santa-dancing-gif-ho-ho-ho-merry-christmas.gif" // Replace with your actual image
          alt="Bedsheets and Comforters"
          className="img-fluid"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Experience Comfort Like Never Before
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Explore our luxurious range of bedsheets and comforters designed to
          bring comfort and elegance to your bedroom.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default WelcomePage;
