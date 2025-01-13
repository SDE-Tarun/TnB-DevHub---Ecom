import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast } from "react-toastify"; // Assuming you are using react-toastify for notifications
import { useState } from "react";
import DescribedImage from "../components/DescribedImage";
import HeaderDashed from "../components/HeaderDashed";

const Contact = () => {
  const mainImg =
    "https://media2.giphy.com/media/5hgMcnAkBVcARGsGWu/giphy.gif?cid=6c09b9520t0cpcoos81nifl3bkrnz5jlmu9fo3xj6tca88r2&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g";

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
      className="contact-page text-center py-3 pt-5"
    >
      <div className="container">
        {/* Header with dashed style */}
        <HeaderDashed head1="CONTACT" head2="US" classStyle="fw-normal fs-3" />

        {/* Described Image Section */}
        <DescribedImage
          img={mainImg}
          imgTitle="desk image"
          styleInLarge="justify-content-center column-gap-xl-4"
          styleImg="col-xl-5"
          styleText="col-xl-5"
          sideText={
            <Formik
              initialValues={{ name: "", email: "", message: "" }}
              onSubmit={handleFormSubmit}
            >
              {({ isSubmitting, resetForm }) => (
                <Form
                  className="mt-5 d-flex flex-column gap-4 align-items-center"
                  style={{
                    maxWidth: "500px",
                    width: "100%", // Ensure form takes full width up to max-width
                    backgroundColor: "transparent",
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
          }
        />
      </div>
    </motion.div>
  );
};

export default Contact;

