import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeaderDashed from "./HeaderDashed";
import CollectionCard from "../components/CollectionCard"; // Import CollectionCard for displaying products

const LatestCollection = () => {
  const [productsData, setProductsData] = useState([]); // State to store products
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch latest products data
  useEffect(() => {
    const fetchLatestProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/product/all"); // Fetch products from backend
        if (!response.ok) {
          throw new Error("Failed to fetch latest products");
        }
        const data = await response.json();

        // Sort products by createdAt in descending order
        const sortedProducts = data.products.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        // Optionally limit to the latest N products (e.g., 4)
        setProductsData(sortedProducts.slice(0, 4)); // Limit to top 4 latest products
        setLoading(false); // Stop loading
      } catch (error) {
        setError(error.message); // Handle errors
        setLoading(false); // Stop loading
      }
    };

    fetchLatestProducts(); // Fetch latest products
  }, []);

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger animations for child elements
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  if (loading) {
    return <p>Loading latest collections...</p>; // Loading message
  }

  if (error) {
    return <p>Error: {error}</p>; // Error message
  }

  return (
    <motion.section
      className="latest-collections mt-6"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Header with title and description */}
      <HeaderDashed
        head1="LATEST"
        head2="COLLECTIONS"
        paragraph="Discover our Latest Collection of premium bedsheets and comforters, where style meets ultimate comfort for your dream bedroom!"
      />

      {/* Display the latest products with animation */}
      <motion.div
        className="container"
        variants={containerVariants} // Apply stagger animation
        initial="hidden"
        animate="visible"
      >
        <div className="row g-4">
          {productsData.map((product) => (
            <motion.div
              key={product._id}
              className="col-12 col-md-6 col-lg-4 col-xl-3"
              variants={cardVariants} // Apply individual card animation
            >
              <CollectionCard data={product} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default LatestCollection;

