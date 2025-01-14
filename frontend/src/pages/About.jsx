 // import { motion } from "framer-motion";
// import HeaderDashed from "../components/HeaderDashed";
// // import aboutGif from "../assets/about_us.gif"; // Add your gif image here

// const About = () => {
//   // Animation variants for reusable animations
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="about-page text-center py-3 pt-0"
//     >
//       {/* Banner Section with GIF background */}
//       <motion.div
//         className="about-banner"
//         style={{
//           backgroundImage: `url('https://images.unsplash.com/photo-1552581234-26160f608093?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8')`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           minHeight: 'calc(100vh - 2rem)', // Ensure the image covers the screen height
//           display: 'flex',
//           flexDirection: 'column', // Stack the heading and paragraph vertically
//           justifyContent: 'space-between', // Push items to top and bottom
//           color: '#fff',
//           paddingTop: '40px', // Adjust top padding to position the heading near the top
//           position: 'relative', // To position the text over the image
//         }}
//       >
//         <motion.div
//           className="container"
//           initial="hidden"
//           animate="visible"
//           variants={staggerContainer}
//           style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', marginTop: '20px' }}
//         >
//           {/* Page header with dashed styling */}
//           <motion.div variants={fadeInUp}>
//             <HeaderDashed head1="ABOUT" head2="US" classStyle="fw-normal fs-3" />
//           </motion.div>
//         </motion.div>

//         {/* Paragraph on bottom of the image */}
//         <motion.div
//           className="container"
//           initial="hidden"
//           animate="visible"
//           variants={staggerContainer}
//           style={{ paddingBottom: '40px' }} // Add bottom padding for some space
//         >
//           <motion.div variants={fadeInUp}>
//             <p className="text-center" >
//               At ComfyHaven, we are passionate about enhancing your living
//               spaces with elegance and comfort. Our journey began with a
//               commitment to offering premium bedsheets and comforters that
//               combine quality, style, and affordability. We take pride in
//               curating collections that suit diverse tastes, ensuring every
//               home feels cozy and refined.
//               <br />
//               <br />
//               Since our inception, we’ve worked tirelessly to curate a
//               diverse selection of high-quality products that cater to every
//               taste and preference. From fashion and beauty to electronics
//               and home essentials, we offer an extensive collection sourced
//               from trusted brands and suppliers.
//             </p>
//           </motion.div>
//         </motion.div>
//       </motion.div>

//       {/* Why Choose Us section */}
//       <section className="choose-us mt-6" style={{ position: 'relative', zIndex: 1 }}>
//         {/* Centered Header Dashed */}
//         <motion.div
//           variants={fadeInUp}
//           style={{
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             marginBottom: '2rem', // Adds space below the header
//           }}
//         >
//           <HeaderDashed head1="WHY" head2="CHOOSE US" />
//         </motion.div>

//         {/* Benefits Section */}
//         <motion.div
//           className="pros mt-4"
//           initial="hidden"
//           animate="visible"
//           variants={staggerContainer}
//         >
//           <div className="row row-gap-4">
//             {/* Each article represents a benefit */}
//             {[
//               {
//                 title: "Quality Assurance:",
//                 description:
//                   "We meticulously select and vet each product to ensure it meets our stringent quality standards.",
//               },
//               {
//                 title: "Convenience:",
//                 description:
//                   "We meticulously select and vet each product to ensure it meets our stringent quality standards.",
//               },
//               {
//                 title: "Exceptional Customer Service:",
//                 description:
//                   "Our team of dedicated professionals is here to assist you, ensuring your satisfaction is our top priority.",
//               },
//             ].map((item, index) => (
//               <motion.article
//                 key={index}
//                 className="col-12 col-lg-4"
//                 variants={fadeInUp}
//               >
//                 <div className="text-start border rounded p-4 h-100">
//                   <h4 className="fs-6 fw-bold">{item.title}</h4>
//                   <p className="c-mm-gray mb-0 mt-4">{item.description}</p>
//                 </div>
//               </motion.article>
//             ))}
//           </div>
//         </motion.div>
//       </section>
//     </motion.div>
//   );
// };

// export default About;

// import { motion } from "framer-motion";
// import HeaderDashed from "../components/HeaderDashed";
// // import aboutGif from "../assets/about_us.gif"; // Add your gif image here

// const About = () => {
//   // Animation variants for reusable animations
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="about-page text-center py-3 pt-0"
//       style={{ overflowX: 'hidden' }} // Prevent horizontal scrolling
//     >
//       {/* Banner Section with GIF background */}
//       <motion.div
//         className="about-banner"
//         style={{
//           backgroundImage: `url('https://images.pexels.com/photos/2815377/pexels-photo-2815377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           minHeight: 'calc(100vh - 2rem)', // Ensure the image covers the screen height
//           display: 'flex',
//           flexDirection: 'column', // Stack the heading and paragraph vertically
//           justifyContent: 'space-between', // Push items to top and bottom
//           color: '#fff',
//           paddingTop: '40px', // Adjust top padding to position the heading near the top
//           position: 'relative', // To position the text over the image
//         }}
//       >
//         <motion.div
//           className="container"
//           initial="hidden"
//           animate="visible"
//           variants={staggerContainer}
//           style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', marginTop: '20px' }}
//         >
//           {/* Page header with dashed styling */}
//           <motion.div variants={fadeInUp}>
//             {/* <HeaderDashed head1="ABOUT" head2="US" classStyle="fw-normal fs-3" /> */}
//           </motion.div>
//         </motion.div>
//       </motion.div>

//       {/* Why Choose Us section */}
//       <section className="choose-us mt-6" style={{ position: 'relative', zIndex: 1 }}>
//         {/* Centered Header Dashed */}
//         <motion.div
//           variants={fadeInUp}
//           style={{
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             marginBottom: '2rem', // Adds space below the header
//           }}
//         >
//           <HeaderDashed head1="WHY" head2="CHOOSE US" />
//         </motion.div>

//         {/* Benefits Section */}
//         <motion.div
//           className="pros mt-4"
//           initial="hidden"
//           animate="visible"
//           variants={staggerContainer}
//         >
//           <div className="row row-gap-4">
//             {/* Each article represents a benefit */}
//             {[
//               {
//                 title: "Quality Assurance:",
//                 description:
//                   "We meticulously select and vet each product to ensure it meets our stringent quality standards.",
//               },
//               {
//                 title: "Convenience:",
//                 description:
//                   "We meticulously select and vet each product to ensure it meets our stringent quality standards.",
//               },
//               {
//                 title: "Exceptional Customer Service:",
//                 description:
//                   "Our team of dedicated professionals is here to assist you, ensuring your satisfaction is our top priority.",
//               },
//             ].map((item, index) => (
//               <motion.article
//                 key={index}
//                 className="col-12 col-lg-4"
//                 variants={fadeInUp}
//               >
//                 <div className="text-start border rounded p-4 h-100">
//                   <h4 className="fs-6 fw-bold">{item.title}</h4>
//                   <p className="c-mm-gray mb-0 mt-4">{item.description}</p>
//                 </div>
//               </motion.article>
//             ))}
//           </div>
//         </motion.div>
//       </section>
//     </motion.div>
//   );
// };

// export default About;

import { motion } from "framer-motion";
import HeaderDashed from "../components/HeaderDashed";

const About = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const hoverEffect = {
    scale: 1.05,
    transition: { duration: 0.3 },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="about-page text-center py-3 pt-0"
      style={{ overflowX: "hidden" }}
    >
      {/* Banner Section */}
      <motion.div
        className="about-banner"
        style={{
          backgroundImage: `url('https://files.oaiusercontent.com/file-JdTHDG4XWUEN789XyWeos6?se=2025-01-14T05%3A08%3A54Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dedb0101c-64b5-4b7e-870b-6a43d37f415a.webp&sig=4kfe7T4Kg/U4SxzuCUF/gnIjN8OKMlQLbRrNxNElO6w%3D')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "calc(100vh - 2rem)",
          color: "#fff",
          paddingTop: "40px",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="container"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            {/* <HeaderDashed head1="ABOUT" head2="US" classStyle="fw-normal fs-3" /> */}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Why Choose Us Section */}
      <section
        className="choose-us mt-6"
        style={{ position: "relative", zIndex: 1 }}
      >
        <motion.div
          variants={fadeInUp}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <HeaderDashed head1="WHY" head2="CHOOSE US" />
        </motion.div>

        {/* Benefits */}
        <motion.div
          className="pros mt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="row row-gap-4">
            {[
              {
                title: "Quality Assurance:",
                description:
                  "We meticulously select and vet each product to ensure it meets our stringent quality standards.",
              },
              {
                title: "Convenience:",
                description:
                  "Shop anytime, anywhere, and get products delivered to your doorstep with ease.",
              },
              {
                title: "Exceptional Customer Service:",
                description:
                  "Our team of dedicated professionals is here to assist you, ensuring your satisfaction is our top priority.",
              },
            ].map((item, index) => (
              <motion.article
                key={index}
                className="col-12 col-lg-4"
                variants={fadeInUp}
                whileHover={hoverEffect}
              >
                <div className="text-start border rounded p-4 h-100">
                  <motion.h4
                    className="fs-6 fw-bold"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.title}
                  </motion.h4>
                  <motion.p
                    className="c-mm-gray mb-0 mt-4"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.description}
                  </motion.p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default About;









