// import React from "react";

// import HeaderDashed from "./HeaderDashed";

// const BestSeller = () => {
//   return (
//     <div className="best-seller py-5">
//       <HeaderDashed
//         head1="BEST"
//         head2="SELLERS"
//         paragraph="Explore our Best Sellers, handpicked favorites loved for their unmatched comfort and timeless elegance!"
//       />
//     </div>
//   );
// };

// export default BestSeller;

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

