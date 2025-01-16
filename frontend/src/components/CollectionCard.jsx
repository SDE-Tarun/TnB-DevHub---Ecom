// import { useNavigate } from "react-router-dom"; // To navigate to product details page

// const CollectionCard = ({ data: { _id, images, title, price } }) => {
//   const navigate = useNavigate(); // Hook to navigate to product details page

//   return (
//     <div
//       className="collection-card trans-3 p-2 border-0 card box-shadow-gray cursor"
//       onClick={() => navigate(`/products/${_id}`)} // Navigate to product details page on click
//       data-aos="fade-up"
//     >
//       <figure className="overflow-hidden rounded">
//         <img
//           src={images[0]} // Assuming images is an array and we use the first image
//           alt={title}
//           className="card-img rounded mx-h-300 trans-3 img-scall"
//           style={{ objectFit: 'cover', height: '200px' }}
//         />
//       </figure>
//       <article className="card-body text-start p-0">
//         <h4 className="card-title fs-6 c-gray fw-normal">{title}</h4>
//         <div className="price fw-bold fs-small c-d-gray">₹ {price}</div>
//       </article>
//     </div>
//   );
// };

// export default CollectionCard;

import { useState } from "react";
import { useNavigate } from "react-router-dom"; // To navigate to product details page
import { FaHeart } from "react-icons/fa"; // Import heart icon from react-icons

const CollectionCard = ({ data: { _id, images, title, price, ratings } }) => {
  const navigate = useNavigate(); // Hook to navigate to product details page
  const [isInWishlist, setIsInWishlist] = useState(false); // Track the wishlist state

  const handleWishlistClick = (e) => {
    e.stopPropagation(); // Prevent other click handlers
    setIsInWishlist((prev) => !prev); // Toggle the wishlist state
    console.log(isInWishlist ? "Removed from wishlist" : "Added to wishlist");
  };

  return (
    <div
      className="collection-card trans-3 p-3 border-0 card box-shadow-gray cursor d-flex flex-column justify-content-between"
      onClick={() => navigate(`/products/${_id}`)} // Navigate to product details page on click
      data-aos="fade-up"
      style={{
        maxWidth: "300px",
        textAlign: "center",
        border: "1px solid #ddd",
        borderRadius: "10px",
        overflow: "hidden",
        position: "relative", // For positioning the heart icon
      }}
    >
      <figure className="overflow-hidden rounded">
        <img
          src={images[0]} // Assuming images is an array and we use the first image
          alt={title}
          className="card-img rounded trans-3 img-scall"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "200px",
          }}
        />
      </figure>
      <article className="card-body text-left mt-2 p-2">
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="card-title fs-6 c-gray fw-bold mb-2">{title}</h4>

          {/* Add to Wishlist Heart Icon Button */}
          <button
      className="wishlist-btn p-0 border-0 bg-transparent"
      style={{
        fontSize: "1.5rem",
        color: isInWishlist ? "#ff0000" : "#ccc", // Red color when added, gray when not
        cursor: "pointer",
      }}
      onClick={handleWishlistClick}
    >
      <FaHeart />
    </button>
        </div>

        <div className="ratings d-flex justify-content-left align-items-left mb-2">
          <span
            className="badge bg-success me-1"
            style={{ fontSize: "0.8rem", padding: "0.3rem 0.6rem" }}
          >
            ⭐ {ratings.average.toFixed(1)}
          </span>
          <span style={{ fontSize: "0.8rem", color: "#999" }}>
            ({ratings.totalReviews} reviews)
          </span>
        </div>

        <div className="price fw-bold fs-5 text-primary">₹ {price}</div>
      </article>
    </div>
  );
};

export default CollectionCard;


