import { motion } from "framer-motion";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast } from "react-toastify"; // Importing toast
import "react-toastify/dist/ReactToastify.css"; // Import the styles
import HeaderDashed from "../components/HeaderDashed";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Handle form submission
  const handleFormSubmit = async (values, { resetForm }) => {
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
        toast.success("Form submitted successfully!"); // Success toast
        resetForm(); // Reset the form data
      } else {
        toast.error(res.message || "Something went wrong!"); // Error toast
        setError(res.message);
      }
    } catch (error) {
      setError("Something went wrong. Please try again later.");
      toast.error("Something went wrong. Please try again later."); // Error toast
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
        backgroundImage: `url("https://img.freepik.com/free-photo/vintage-pink-telephone-assortment_23-2148913963.jpg?t=st=1736438864~exp=1736442464~hmac=df47c4bdc1e97bd51cedf5e90510b6e9b38bb9f9fcd6983d1e2036ebea82fa40&w=2000")`,
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
          <HeaderDashed head1="Contact" head2="US" />
        </motion.h1>

        {/* Web3 Form Section */}
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          onSubmit={handleFormSubmit}
        >
          {({ isSubmitting, resetForm }) => (
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
              {error && <p className="text-danger">{error}</p>}
            </Form>
          )}
        </Formik>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
