import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CollectionCard from "../components/CollectionCard"; // Import the CollectionCard component

const Collection = () => {
  const [productsData, setProductsData] = useState([]); // State to store products
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch products data from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/product/all"); // Fetch products from the backend API
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        
        setProductsData(data.products); // Store fetched products
        setLoading(false); // Stop loading once data is fetched
      } catch (error) {
        setError(error.message); // Set error message in case of failure
        setLoading(false); // Stop loading if there's an error
      }
    };

    fetchProducts(); // Call the fetch function
  }, []); // Empty dependency array means this runs only once when the component mounts

  if (loading) {
    return <p>Loading products...</p>; // Show loading text while fetching
  }

  if (error) {
    return <p>Error: {error}</p>; // Display error message if the API call fails
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="collection-page py-3 pt-405"
    >
      <div className="container">
        <div className="row row-gap-4">
          {/* Use flexbox or grid system to align cards */}
          <div className="col-12">
            <div className="row g-4">
              {/* Display all products */}
              {productsData.map((product) => (
                <div key={product._id} className="col-12 col-md-6 col-lg-4 col-xl-3">
                  <CollectionCard data={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Collection;
