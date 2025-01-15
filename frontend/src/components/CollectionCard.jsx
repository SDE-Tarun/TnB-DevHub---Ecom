import { useNavigate } from "react-router-dom"; // To navigate to product details page

const CollectionCard = ({ data: { _id, images, title, price } }) => {
  const navigate = useNavigate(); // Hook to navigate to product details page

  return (
    <div
      className="collection-card trans-3 p-2 border-0 card box-shadow-gray cursor"
      onClick={() => navigate(`/products/${_id}`)} // Navigate to product details page on click
      data-aos="fade-up"
    >
      <figure className="overflow-hidden rounded">
        <img
          src={images[0]} // Assuming images is an array and we use the first image
          alt={title}
          className="card-img rounded mx-h-300 trans-3 img-scall"
          style={{ objectFit: 'cover', height: '200px' }}
        />
      </figure>
      <article className="card-body text-start p-0">
        <h4 className="card-title fs-6 c-gray fw-normal">{title}</h4>
        <div className="price fw-bold fs-small c-d-gray">₹ {price}</div>
      </article>
    </div>
  );
};

export default CollectionCard;
