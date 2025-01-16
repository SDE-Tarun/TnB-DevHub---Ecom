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

import { useNavigate } from "react-router-dom"; // To navigate to product details page

const CollectionCard = ({ data: { _id, images, title, price, ratings } }) => {
  const navigate = useNavigate(); // Hook to navigate to product details page

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
      <article className="card-body text-center mt-2 p-2">
        <h4 className="card-title fs-6 c-gray fw-bold mb-2">{title}</h4>
        <div className="ratings d-flex justify-content-center align-items-center mb-2">
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

