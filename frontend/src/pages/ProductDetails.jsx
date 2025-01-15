import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // To get the productId from the URL
// import FetchErrorMsg from "../components/FetchErrorMsg";
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
        const response = await fetch(`http://localhost:3000/api/product/single/${id}`);
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
      className="product-details overflow-hidden"
    >
      <div className="container mt-5">
        <main className="product-wrapper d-flex gap-3 gap-lg-5 flex-wrap align-items-start">
          {/* Product Images */}
          <figure className="d-flex flex-column flex-sm-row-reverse row-gap-3 column-gap-2 col-12 col-sm justify-content-sm-between">
            <img
              style={{ maxHeight: "390px" }}
              src={productData.images[activeImage]} // Display the selected image
              className="col-12 col-sm-9"
              alt={productData.title}
            />
            <div className="samples col-2 col-sm d-flex flex-sm-column gap-1">
              {productData.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  className={`w-100 trans-3 preview-img ${activeImage === index ? "active" : ""}`}
                  alt={productData.title}
                  onMouseOver={() => setActiveImage(index)} // On hover change image
                />
              ))}
            </div>
          </figure>

          {/* Product Info */}
          <article className="col-12 col-sm col-lg-8 mb-3">
            <h1 className="mt-3 mrt-0 fs-2">{productData.title}</h1>

            {/* Removed Product Rating Section */}
            {/* If you want to handle rating in the future, you can add it back later */}
            {productData.rating && (
              <div className="rating">
                <div className="stars mb-3">
                  {Array(5)
                    .fill()
                    .map((_, i) => (
                      <i
                        key={i}
                        className={`bx bxs-star ${productData.rating.stars >= i + 1 ? "active" : ""}`}
                      ></i>
                    ))}
                  <span className="ms-2">({productData.rating.count})</span>
                </div>
              </div>
            )}

            <span className="fw-bold fs-2 d-block mb-3">₹ {productData.price}</span>

            {/* Product Description */}
            <p className="c-gray">{productData.description}</p>

            {/* Select Size */}
            <div className="select-size mt-4">
              <span className="c-gray fw-bold">Select Size</span>
              <div className="size-btns d-flex gap-2 mt-2">
                {/* Assuming sizes are S, M, L */}
                {['S', 'M', 'L'].map((size) => (
                  <span
                    key={size}
                    className={`d-block px-3 py-2 bg-m-gray border-gray trans-3 ${activeSize === size ? "active" : ""}`}
                    role="button"
                    onClick={() => setActiveSize(size)}
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <button className="addcart-btn btn rounded-0 bg-black c-white mt-4 trans-3 mb-2 py-2 px-4">
              ADD TO CART
            </button>
          </article>
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
