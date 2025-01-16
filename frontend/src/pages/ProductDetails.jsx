import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // To get the productId from the URL
import FetchWaitingMsg from "../components/FetchWaitingMsg"; // To show loading state
import { motion } from "framer-motion";

const ProductDetails = () => {
  const { id } = useParams(); // Get the productId from the URL
  const [productData, setProductData] = useState(null); // State to store the fetched product data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [activeSize, setActiveSize] = useState(null); // Active size selection state
  const [activeImage, setActiveImage] = useState(0); // Active image selection state

  // Fetch product details from backend
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/product/single/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }
        const data = await response.json();
        console.log("Fetched product data:", data); // Add this line to check the fetched data
        setProductData(data); // Set the product data
        setLoading(false); // Stop loading once data is fetched
      } catch (error) {
        console.error("Error fetching product details:", error);
        setError(error.message); // Set error message if fetching fails
        setLoading(false); // Stop loading in case of error
      }
    };

    fetchProductDetails(); // Call the function to fetch product data
  }, [id]);

  // Show loading message or error if needed
  if (loading) {
    return <FetchWaitingMsg />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!productData) {
    return <p>Product details not available</p>; // You could also return a fallback skeleton loader
  }

  console.log("Product Data:", productData); // Inspect the fetched product data

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="product-details overflow-hidden"
    >
      <div className="container mt-5">
        <main className="product-wrapper d-flex gap-3 gap-lg-5 flex-wrap align-items-start">
          {/* Product Images */}
          <motion.figure
            className="d-flex flex-column flex-sm-row-reverse row-gap-3 column-gap-2 col-12 col-sm justify-content-sm-between"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <img
              style={{ maxHeight: "390px" }}
              src={productData.images[activeImage]} // Display the selected image
              className="col-12 col-sm-9"
              alt={productData.title}
            />
            <motion.div
              className="samples col-2 col-sm d-flex flex-sm-column gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeInOut" }}
            >
              {productData.images.map((img, index) => (
                <motion.img
                  key={index}
                  src={img}
                  className={`w-100 trans-3 preview-img ${
                    activeImage === index ? "active" : ""
                  }`}
                  alt={productData.title}
                  onMouseOver={() => setActiveImage(index)} // On hover change image
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              ))}
            </motion.div>
          </motion.figure>

          {/* Product Info */}
          <motion.article
            className="col-12 col-sm col-lg-8 mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <h1 className="mt-3 mrt-0 fs-2">{productData.title}</h1>

            {/* Product Rating */}
            {productData.ratings && (
              <div className="rating mt-2">
                <div className="stars mb-3">
                  {Array(5)
                    .fill()
                    .map((_, i) => {
                      const isFullStar = productData.ratings.average >= i + 1;
                      const isHalfStar =
                        productData.ratings.average >= i + 0.5 &&
                        productData.ratings.average < i + 1;

                      return (
                        <i
                          key={i}
                          className={`bx ${
                            isFullStar
                              ? "bxs-star"
                              : isHalfStar
                              ? "bxs-star-half"
                              : "bx-star"
                          }`}
                          style={{
                            color: isFullStar
                              ? "#FFD700"
                              : isHalfStar
                              ? "#FFD700"
                              : "#d3d3d3", // Gold for filled, gray for empty, half-star as gold
                          }}
                        ></i>
                      );
                    })}
                  <span className="ms-2">
                    ({productData.ratings.totalReviews} reviews)
                  </span>
                </div>
              </div>
            )}

            <span className="fw-bold fs-2 d-block mb-3">
              ₹ {productData.price}
            </span>

            {/* Product Description */}
            <p className="c-gray">{productData.description}</p>

            {/* Select Size */}
            <motion.div
              className="select-size mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeInOut" }}
            >
              <span className="c-gray fw-bold">Select Size</span>
              <div className="size-btns d-flex gap-2 mt-2">
                {/* Assuming sizes are S, M, L */}
                {["S", "M", "L"].map((size) => (
                  <motion.span
                    key={size}
                    className={`d-block px-3 py-2 bg-m-gray border-gray trans-3 ${
                      activeSize === size ? "active" : ""
                    }`}
                    role="button"
                    onClick={() => setActiveSize(size)}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {size}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Add to Cart Button */}
            <motion.button
              className="addcart-btn btn rounded-0 bg-black c-white mt-4 trans-3 mb-2 py-2 px-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              ADD TO CART
            </motion.button>
          </motion.article>
        </main>

        {/* Related Products */}
        {/* <div className="related-products mt-5">
          <h2 className="fs-4 fw-bold">RELATED PRODUCTS</h2>
          <div className="row">
            {productData.relatedProducts?.map((relatedProduct) => (
              <div className="col-12 col-md-6 col-lg-4" key={relatedProduct._id}>
                <CollectionCard data={relatedProduct} />
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </motion.section>
  );
};

export default ProductDetails;
