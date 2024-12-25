// import HeaderDashed from "./HeaderDashed";

// import React from "react";

// const LatestCollection = () => {
//   return (
//     <section className="latest-collections mt-6">
//       {/* Header with title and description */}
//       <HeaderDashed
//         head1="LATEST"
//         head2="COLLECTIONS"
//         paragraph="Discover our Latest Collection of premium bedsheets and comforters, where style meets ultimate comfort for your dream bedroom!"
//       />
//     </section>
//   );
// };

// export default LatestCollection;

import React from "react";
import { motion } from "framer-motion";
import HeaderDashed from "./HeaderDashed";

const LatestCollection = () => {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="latest-collections mt-6"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Header with title and description */}
      <HeaderDashed
        head1="LATEST"
        head2="COLLECTIONS"
        paragraph="Discover our Latest Collection of premium bedsheets and comforters, where style meets ultimate comfort for your dream bedroom!"
      />
    </motion.section>
  );
};

export default LatestCollection;
