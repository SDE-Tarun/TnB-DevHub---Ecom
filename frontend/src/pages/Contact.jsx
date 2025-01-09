// import { motion } from "framer-motion";
// import mainImg from "../assets/contact_img.png";
// import DescribedImage from "../components/DescribedImage";
// import HeaderDashed from "../components/HeaderDashed";

// const Contact = () => {
//   // Animation variants
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//       },
//     },
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="contact-page text-center py-3 pt-5"
//     >
//       <motion.div
//         className="container"
//         variants={staggerContainer}
//         initial="hidden"
//         animate="visible"
//       >
//         {/* Header with dashed style */}
//         <motion.div variants={fadeInUp}>
//           <HeaderDashed
//             head1="CONTACT"
//             head2="US"
//             classStyle="fw-normal fs-3"
//           />
//         </motion.div>

//         {/* Described Image Section */}
//         <motion.div variants={fadeInUp}>
//           <DescribedImage
//             img={mainImg}
//             imgTitle="desk image"
//             styleInLarge="justify-content-center column-gap-xl-4"
//             styleImg="col-xl-5"
//             styleText="col-xl-5"
//             sideText={
//               <>
//                 {/* Store Information */}
//                 <div className="our-store">
//                   <h3 className="c-d-gray">Our Store</h3>
//                   <motion.address className="my-4" variants={fadeInUp}>
//                     <span>First Address</span>
//                     <br />
//                     <span>Second Address</span>
//                   </motion.address>
//                   <motion.div className="telephone" variants={fadeInUp}>
//                     Tel: Number Here
//                     <br />
//                     Email: Email Here
//                   </motion.div>
//                 </div>
//                 {/* Careers Information */}
//                 {/* <motion.div className="careers mt-5" variants={fadeInUp}>
//                   <h4 className="c-d-gray">Careers at ComfyHaven</h4>
//                   <span className="d-block my-4">
//                     Learn more about our teams and job openings.
//                   </span>
//                   <button className="btn py-3 px-4 border-out-d-gray rounded-0">
//                     Explore Jobs
//                   </button>
//                 </motion.div> */}
//               </>
//             }
//           />
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Contact;

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CollectionCard from "../components/CollectionCard";

const Collection = () => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/product/all");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProductsData(data.products);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="collection-page py-3 pt-405">
      <div className="container">
        <div className="row row-gap-4">
          <div className="col-12">
            <div className="row g-4">
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







