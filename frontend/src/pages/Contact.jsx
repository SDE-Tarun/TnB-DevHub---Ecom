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
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
// import mainImg from "../assets/contact_page.avif"; // Use your own background image here
import HeaderDashed from "../components/HeaderDashed";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const handleFormSubmit = async (values) => {
    setLoading(true);
    const json = JSON.stringify({ ...values, access_key: "7d78993e-8962-489c-a26d-7ecce59ff99a" });

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setMessage(res.message);
      } else {
        setError(res.message);
      }
    } catch (error) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="contact-page"
      style={{
        backgroundImage: `url("https://nrbapp.jollylifestyle.com/assets/img/menu-pages/contact-us-mobile.gif")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex", // Centering the child content horizontally
        justifyContent: "center", // Centering horizontally
        alignItems: "center", // Centering vertically
        textAlign: "center",
        color: "#fff",
        padding: "0 20px",
      }}
    >
      <motion.div
        className="container"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        style={{
          maxWidth: "800px", // Maximum width of the form container
          width: "100%", // Ensure it takes full width on small screens
          marginLeft: "auto", // Ensures the form is aligned properly
          marginRight: "auto", // Ensures the form is aligned properly
          borderRadius: "10px",
          padding: "20px",
          display: "flex", // Flexbox to center the form
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Heading */}
        <motion.h1
          className="fw-normal fs-3 mb-4"
          style={{
            color: "#FE7878",
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "30px",
          }}
        >
          {/* <HeaderDashed head1="Contact" head2="US" /> */}
        </motion.h1>

        {/* Web3 Form Section */}
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          onSubmit={handleFormSubmit}
        >
          {({ isSubmitting }) => (
            <Form
              className="mt-5 d-flex flex-column gap-4 align-items-center border border-2 p-4"
              style={{
                maxWidth: "500px",
                width: "100%", // Ensure form takes full width up to max-width
                backgroundColor: "#ffffff",
                borderRadius: "10px",
                padding: "20px",
                color: "#333",
              }}
            >
              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="d-flex flex-column align-items-start w-100"
              >
                <label htmlFor="name" className="mb-2 fs-4">
                  Name:
                </label>
                <Field
                  className="p-3 outline-0 w-100 border-gray border-05"
                  name="name"
                  type="text"
                  id="name"
                  placeholder="Enter Your Name"
                  style={{
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                  }}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-danger mt-2"
                />
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="d-flex flex-column align-items-start w-100"
              >
                <label htmlFor="email" className="mb-2 fs-4">
                  Email:
                </label>
                <Field
                  className="p-3 outline-0 w-100 border-gray border-05"
                  name="email"
                  type="email"
                  id="email"
                  placeholder="example@gmail.com"
                  style={{
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                  }}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-danger mt-2"
                />
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="d-flex flex-column align-items-start w-100"
              >
                <label htmlFor="message" className="mb-2 fs-4">
                  Message:
                </label>
                <Field
                  className="p-3 outline-0 w-100 border-gray border-05"
                  name="message"
                  component="textarea"
                  id="message"
                  placeholder="Enter your message"
                  style={{
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                  }}
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-danger mt-2"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                type="submit"
                className="btn bg-black py-2 px-4 rounded c-white fs-5 mt-4 w-100"
                style={{
                  backgroundColor: "#1B74E4",
                  color: "#fff",
                  padding: "0.8rem",
                  borderRadius: "5px",
                  border: "none",
                }}
                disabled={isSubmitting || loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </motion.button>

              {/* Success/Error Message */}
              {message && <p className="text-success">{message}</p>}
              {error && <p className="text-danger">{error}</p>}
            </Form>
          )}
        </Formik>
      </motion.div>
    </motion.div>
  );
};

export default Contact;








