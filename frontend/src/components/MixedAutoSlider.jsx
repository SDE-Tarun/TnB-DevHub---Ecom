// const MixedAutoSlider = () => {
//   return (
//     <section className="mixed-slider">
//       <div className="border-05 p-0 overflow-hidden flex-wrap d-flex">
//         {/* Text section */}
//         <article className="text py-5 m-auto col-12 col-md-6">
//           <div className="fit-content m-auto">
//             <header className="d-flex align-items-center gap-2">
//               <span className="fw-bold line-span bg-gray"></span>
//               <span className="fw-bold c-gray">OUR BESTSELLERS</span>
//             </header>
//             <h2 className="playflair-font fs-big my-3 playflair-l-font">
//               Latest Arrivals
//             </h2>
//             <footer className="d-flex align-items-center gap-2">
//               <button
//                 className="btn fit-content fw-bold c-gray p-0"
//                 role="button"
//               >
//                 SHOP NOW
//               </button>
//               <span className="fw-bold line-span bg-gray"></span>
//             </footer>
//           </div>
//         </article>
//         {/* GIF section */}
//         <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
//           <img
//             className="mh-450 w-100"
//             src="https://cdn.prod.website-files.com/64a483b190bfff9cdf96e93b/656d9a29de75ea9eb8686679_YZfiQGA9pT3TKZfktwgaIjj6ZCfkwVq4sr-XssOgWJwDzfBVTWHWBS_1QPEhT-xGi1vkexFUUuSPwiDKKY_mgivj_jFmhZeCYAxk48CwIJwUE-Gje_KFqodv_UuLiK5rl3IefMyf-mEyktznOsfiTTA.gif"
//             alt="Latest Arrivals GIF"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MixedAutoSlider;

import React from "react";
import { motion } from "framer-motion";

const MixedAutoSlider = () => {
  // Animation variants for text and image sections
  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.section
      className="mixed-slider"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.2 }}
    >
      <div className="border-05 p-0 overflow-hidden flex-wrap d-flex">
        {/* Animated Text Section */}
        <motion.article
          className="text py-5 m-auto col-12 col-md-6"
          variants={textVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="fit-content m-auto">
            <header className="d-flex align-items-center gap-2">
              <span className="fw-bold line-span bg-gray"></span>
              <span className="fw-bold c-gray">OUR BESTSELLERS</span>
            </header>
            <h2 className="playflair-font fs-big my-3 playflair-l-font">
              Latest Arrivals
            </h2>
            <footer className="d-flex align-items-center gap-2">
              <button
                className="btn fit-content fw-bold c-gray p-0"
                role="button"
              >
                SHOP NOW
              </button>
              <span className="fw-bold line-span bg-gray"></span>
            </footer>
          </div>
        </motion.article>

        {/* Animated GIF Section */}
        <motion.div
          className="col-12 col-md-6 d-flex justify-content-center align-items-center"
          variants={imageVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            className="mh-450 w-100"
            src="https://cdn.prod.website-files.com/64a483b190bfff9cdf96e93b/656d9a29de75ea9eb8686679_YZfiQGA9pT3TKZfktwgaIjj6ZCfkwVq4sr-XssOgWJwDzfBVTWHWBS_1QPEhT-xGi1vkexFUUuSPwiDKKY_mgivj_jFmhZeCYAxk48CwIJwUE-Gje_KFqodv_UuLiK5rl3IefMyf-mEyktznOsfiTTA.gif"
            alt="Latest Arrivals GIF"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MixedAutoSlider;

