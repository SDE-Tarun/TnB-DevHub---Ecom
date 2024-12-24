import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  const backgroundImage = "https://www.designveloper.com/wp-content/uploads/2023/04/ecommerce-3.gif";
  
  return (
    <motion.div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",  // Takes full viewport height
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",  // Optional: to make the text more visible
      }}
    >
      {/* <h1>Home</h1> */}
    </motion.div>
  );
};

export default Home;
