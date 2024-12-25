// import SingleFeature from "./SingleFeature";
// // Import Features Images
// import exhangeImg from "../assets/download-f.png";
// import qualityImg from "../assets/quality_icon.png";
// import supportImg from "../assets/download-set.png";

// const Features = () => {
//   const featuresImgs = [exhangeImg, qualityImg, supportImg];
//   const featuresContent = [
//     {
//       head: "Easy Exchange Policy",
//       text: "We offer hassle free exchange policy",
//     },
//     {
//       head: "7 Days Return Policy",
//       text: "We provide 7 days free return policy",
//     },
//     { head: "Best Customer Support", text: "We provide 24/7 customer support" },
//   ];

//   return (
//     <section className="features d-flex flex-wrap text-center gap-5 column-gap-3 column-gap-lg-5 sec-padd">
//       {/* Map through images and render SingleFeature component for each */}
//       {featuresImgs.map((img, i) => (
//         <SingleFeature
//           key={i}
//           img={img}
//           classLayout="col-12 col-lg"
//           head={featuresContent[i].head}
//           text={featuresContent[i].text}
//         />
//       ))}
//     </section>
//   );
// };

// export default Features;

import React from "react";
import { motion } from "framer-motion";
import SingleFeature from "./SingleFeature";

// Import Features Images
import exhangeImg from "../assets/download-f.png";
import qualityImg from "../assets/quality_icon.png";
import supportImg from "../assets/download-set.png";

const Features = () => {
  const featuresImgs = [exhangeImg, qualityImg, supportImg];
  const featuresContent = [
    {
      head: "Easy Exchange Policy",
      text: "We offer hassle-free exchange policy",
    },
    {
      head: "7 Days Return Policy",
      text: "We provide 7 days free return policy",
    },
    { head: "Best Customer Support", text: "We provide 24/7 customer support" },
  ];

  // Animation variants
  const featureVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="features d-flex flex-wrap text-center gap-5 column-gap-3 column-gap-lg-5 sec-padd"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      {/* Map through images and render SingleFeature component for each */}
      {featuresImgs.map((img, i) => (
        <motion.div
          key={i}
          className="feature-item col-12 col-lg"
          variants={featureVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <SingleFeature
            img={img}
            classLayout="col-12 col-lg"
            head={featuresContent[i].head}
            text={featuresContent[i].text}
          />
        </motion.div>
      ))}
    </motion.section>
  );
};

export default Features;

