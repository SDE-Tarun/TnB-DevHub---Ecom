import React from "react";
import { motion } from "framer-motion";
import HeaderDashed from "./HeaderDashed";

const BestSeller = () => {
  // Animation variants
  const divVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="best-seller py-5"
      initial="hidden"
      animate="visible"
      variants={divVariants}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <HeaderDashed
        head1="BEST"
        head2="SELLERS"
        paragraph="Explore our Best Sellers, handpicked favorites loved for their unmatched comfort and timeless elegance!"
      />
    </motion.div>
  );
};

export default BestSeller;

// Best Seller on the basis of top rated ratings

// const express = require("express");
// const router = express.Router();
// const Product = require("../models/product.model");

// // Route to fetch top-rated products
// router.get("/product/top-rated", async (req, res) => {
//   try {
//     // Fetch products sorted by ratings.average in descending order
//     const products = await Product.find()
//       .sort({ "ratings.average": -1 }) // Sort by ratings.average (highest first)
//       .limit(10); // Limit to top 10 products (adjust as needed)
//     res.status(200).json({ products });
//   } catch (error) {
//     res.status(500).json({ message: "Failed to fetch top-rated products", error });
//   }
// });

// module.exports = router;


// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import HeaderDashed from "./HeaderDashed";
// import CollectionCard from "../components/CollectionCard";

// const BestSeller = () => {
//   const [topProducts, setTopProducts] = useState([]); // State to store top-rated products
//   const [loading, setLoading] = useState(true); // Loading state
//   const [error, setError] = useState(null); // Error state

//   // Fetch top-rated products on component mount
//   useEffect(() => {
//     const fetchTopProducts = async () => {
//       try {
//         const response = await fetch("http://localhost:3000/api/product/top-rated");
//         if (!response.ok) {
//           throw new Error("Failed to fetch top-rated products");
//         }
//         const data = await response.json();
//         setTopProducts(data.products); // Set top-rated products
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchTopProducts();
//   }, []);

//   // Animation variants
//   const divVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0 },
//   };

//   if (loading) {
//     return (
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         className="text-center py-5"
//       >
//         <p>Loading Best Sellers...</p>
//       </motion.div>
//     );
//   }

//   if (error) {
//     return (
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         className="text-center py-5 text-danger"
//       >
//         <p>Error: {error}</p>
//       </motion.div>
//     );
//   }

//   return (
//     <motion.div
//       className="best-seller py-5"
//       initial="hidden"
//       animate="visible"
//       variants={divVariants}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//     >
//       <HeaderDashed
//         head1="BEST"
//         head2="SELLERS"
//         paragraph="Explore our Best Sellers, handpicked favorites loved for their unmatched comfort and timeless elegance!"
//       />
//       <div className="container mt-4">
//         <div className="row g-4">
//           {topProducts.map((product) => (
//             <div
//               key={product._id}
//               className="col-12 col-md-6 col-lg-4 col-xl-3"
//             >
//               <CollectionCard data={product} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default BestSeller;
