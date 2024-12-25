// import { motion } from "framer-motion";
// import HeaderDashed from "../components/HeaderDashed";
// import mainImg from "../assets/about_us.gif";
// import DescribedImage from "../components/DescribedImage";

// const About = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="about-page text-center py-3 pt-5"
//     >
//       <div className="container">
//         {/* Page header with dashed styling */}
//         <HeaderDashed head1="ABOUT" head2="US" classStyle="fw-normal fs-3" />

//         {/* Main image with descriptive text */}
//         <DescribedImage
//           img={mainImg}
//           imgTitle="clothes image"
//           styleInLarge="column-gap-xl-4"
//           styleImg="col-xl-5"
//           styleText="col-xl-6"
//           sideText={
//             <>
//               <p>
//                 At [Your Website Name], we are passionate about enhancing your
//                 living spaces with elegance and comfort. Our journey began with
//                 a commitment to offering premium bedsheets and comforters that
//                 combine quality, style, and affordability. We take pride in
//                 curating collections that suit diverse tastes, ensuring every
//                 home feels cozy and refined.
//                 <br />
//                 <br />
//                 Since our inception, we&rsquo;ve worked tirelessly to curate a
//                 diverse selection of high-quality products that cater to every
//                 taste and preference. From fashion and beauty to electronics and
//                 home essentials, we offer an extensive collection sourced from
//                 trusted brands and suppliers.
//               </p>
//               {/* Mission statement */}
//               <div className="mission">
//                 <h4 className="my-3 mt-4 c-black">Our Mission</h4>
//                 <p className="mb-0">
//                   Our mission at [Your Website Name] is to empower customers
//                   with choice, convenience, and confidence. We&rsquo;re
//                   dedicated to providing a seamless shopping experience that
//                   exceeds expectations, from browsing and ordering to delivery
//                   and beyond.
//                 </p>
//               </div>
//             </>
//           }
//         />

//         {/* Why Choose Us section */}
//         <section className="choose-us mt-6">
//           <HeaderDashed head1="WHY" head2="CHOOSE US" />
//           <div className="pros mt-4">
//             <div className="row row-gap-4">
//               {/* Each article represents a benefit */}
//               <article className="col-12 col-lg-4">
//                 <div className="text-start border rounded p-4 h-100">
//                   <h4 className="fs-6 fw-bold">Quality Assurance:</h4>
//                   <p className="c-mm-gray mb-0 mt-4">
//                     We meticulously select and vet each product to ensure it
//                     meets our stringent quality standards.
//                   </p>
//                 </div>
//               </article>
//               <article className="col-12 col-lg-4">
//                 <div className="text-start border rounded p-4 h-100">
//                   <h4 className="fs-6 fw-bold">Convenience:</h4>
//                   <p className="c-mm-gray mb-0 mt-4">
//                     We meticulously select and vet each product to ensure it
//                     meets our stringent quality standards.
//                   </p>
//                 </div>
//               </article>
//               <article className="col-12 col-lg-4">
//                 <div className="text-start border rounded p-4 h-100">
//                   <h4 className="fs-6 fw-bold">
//                     Exceptional Customer Service:
//                   </h4>
//                   <p className="c-mm-gray mb-0 mt-4">
//                     Our team of dedicated professionals is here to assist you
//                     the way, ensuring your satisfaction is our top priority.
//                   </p>
//                 </div>
//               </article>
//             </div>
//           </div>
//         </section>
//       </div>
//     </motion.div>
//   );
// };

// export default About;

import { motion } from "framer-motion";
import HeaderDashed from "../components/HeaderDashed";
import mainImg from "../assets/about_us.gif";
import DescribedImage from "../components/DescribedImage";

const About = () => {
  // Animation variants for reusable animations
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="about-page text-center py-3 pt-5"
    >
      <motion.div
        className="container"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Page header with dashed styling */}
        <motion.div variants={fadeInUp}>
          <HeaderDashed head1="ABOUT" head2="US" classStyle="fw-normal fs-3" />
        </motion.div>

        {/* Main image with descriptive text */}
        <motion.div variants={fadeInUp}>
          <DescribedImage
            img={mainImg}
            imgTitle="clothes image"
            styleInLarge="column-gap-xl-4"
            styleImg="col-xl-5"
            styleText="col-xl-6"
            sideText={
              <>
                <p>
                  At ComfyHaven, we are passionate about enhancing your
                  living spaces with elegance and comfort. Our journey began
                  with a commitment to offering premium bedsheets and comforters
                  that combine quality, style, and affordability. We take pride
                  in curating collections that suit diverse tastes, ensuring
                  every home feels cozy and refined.
                  <br />
                  <br />
                  Since our inception, we&rsquo;ve worked tirelessly to curate a
                  diverse selection of high-quality products that cater to every
                  taste and preference. From fashion and beauty to electronics
                  and home essentials, we offer an extensive collection sourced
                  from trusted brands and suppliers.
                </p>
                {/* Mission statement */}
                <div className="mission">
                  <h4 className="my-3 mt-4 c-black">Our Mission</h4>
                  <p className="mb-0">
                    Our mission at ComfyHaven is to empower customers
                    with choice, convenience, and confidence. We&rsquo;re
                    dedicated to providing a seamless shopping experience that
                    exceeds expectations, from browsing and ordering to delivery
                    and beyond.
                  </p>
                </div>
              </>
            }
          />
        </motion.div>

        {/* Why Choose Us section */}
        <section className="choose-us mt-6">
          <motion.div variants={fadeInUp}>
            <HeaderDashed head1="WHY" head2="CHOOSE US" />
          </motion.div>
          <motion.div
            className="pros mt-4"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <div className="row row-gap-4">
              {/* Each article represents a benefit */}
              {[
                {
                  title: "Quality Assurance:",
                  description:
                    "We meticulously select and vet each product to ensure it meets our stringent quality standards.",
                },
                {
                  title: "Convenience:",
                  description:
                    "We meticulously select and vet each product to ensure it meets our stringent quality standards.",
                },
                {
                  title: "Exceptional Customer Service:",
                  description:
                    "Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.",
                },
              ].map((item, index) => (
                <motion.article
                  key={index}
                  className="col-12 col-lg-4"
                  variants={fadeInUp}
                >
                  <div className="text-start border rounded p-4 h-100">
                    <h4 className="fs-6 fw-bold">{item.title}</h4>
                    <p className="c-mm-gray mb-0 mt-4">{item.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </section>
      </motion.div>
    </motion.div>
  );
};

export default About;
