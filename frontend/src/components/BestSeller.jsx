import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeaderDashed from "./HeaderDashed";
import CollectionCard from "../components/CollectionCard"; // Import CollectionCard for displaying products

const BestSeller = () => {
  const [productsData, setProductsData] = useState([]); // State to store products
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch best seller products data
  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/product/all"); // Fetch products from backend
        if (!response.ok) {
          throw new Error("Failed to fetch best sellers");
        }
        const data = await response.json();

        // Sort products by rating in descending order
        const sortedProducts = data.products.sort((a, b) => b.ratings.average - a.ratings.average);

        // Optionally limit to the top N products (e.g., 4)
        setProductsData(sortedProducts.slice(0, 4)); // Limit to top 4 products by rating
        setLoading(false); // Stop loading
      } catch (error) {
        setError(error.message); // Handle errors
        setLoading(false); // Stop loading
      }
    };

    fetchBestSellers(); // Fetch best seller products
  }, []);

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // Individual card animation
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  if (loading) {
    return <p>Loading best sellers...</p>; // Loading message
  }

  if (error) {
    return <p>Error: {error}</p>; // Error message
  }

  return (
    <motion.div
      className="best-seller py-5"
      initial="hidden"
      whileInView="visible"
      variants={sectionVariants}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }} // Trigger only once when the component comes into view
    >
      {/* Header with title and description */}
      <HeaderDashed
        head1="BEST"
        head2="SELLERS"
        paragraph="Explore our Best Sellers, handpicked favorites loved for their unmatched comfort and timeless elegance!"
      />

      {/* Display the best seller products */}
      <div className="container">
        <div className="row g-4">
          {productsData.map((product) => (
            <motion.div
              key={product._id}
              className="col-12 col-md-6 col-lg-4 col-xl-3"
              variants={cardVariants} // Apply animation to individual cards
              initial="hidden"
              whileInView="visible" // Trigger animation when the card comes into view
              viewport={{ once: true }} // Animation will trigger only once per card
            >
              <CollectionCard data={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default BestSeller;

