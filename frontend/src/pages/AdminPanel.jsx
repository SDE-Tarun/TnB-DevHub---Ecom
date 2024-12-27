import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { motion } from "framer-motion";
import HeaderDashed from "../components/HeaderDashed";

const AdminPanel = () => {
  const [showPassword, setShowPassword] = useState(false);

  // Custom validation function
  const validateFields = (values) => {
    let errors = {};

    // Email validation
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Invalid email format";
    }

    // Password validation
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    } else if (!/[a-z]/.test(values.password)) {
      errors.password = "Password must contain at least one lowercase letter";
    } else if (!/[A-Z]/.test(values.password)) {
      errors.password = "Password must contain at least one uppercase letter";
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(values.password)) {
      errors.password = "Password must contain at least one special character";
    }

    return errors;
  };

  const handleSubmit = (values) => {
    console.log("Form data", values);
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="admin-panel text-center sec-padd"
    >
      <div className="container">
        {/* Header with animation */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible">
          <HeaderDashed head1="ADMIN" head2="PANEL" />
        </motion.div>

        <Formik
          initialValues={{ email: "", password: "" }}
          validate={validateFields}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <Form className="mt-5 d-flex flex-column gap-5 align-items-center">
                {/* Email Field */}
                <motion.div
                  className="d-flex flex-column align-items-start w-100"
                  variants={fadeInUp}
                >
                  <label htmlFor="email" className="mb-2 fs-4">
                    Email:
                  </label>
                  <Field
                    className="p-3 py-203 outline-0 w-100 border-gray border-05"
                    name="email"
                    type="text"
                    id="email"
                    placeholder="example@gmail.com"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger mt-2"
                  />
                </motion.div>

                {/* Password Field */}
                <motion.div
                  className="d-flex flex-column align-items-start w-100"
                  variants={fadeInUp}
                >
                  <label
                    htmlFor="password"
                    className="mb-2 fs-4 w-100 d-flex justify-content-between"
                  >
                    Password:
                    <span
                      className={`cursor c-gray ${showPassword && "active"}`}
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      show
                    </span>
                  </label>
                  <Field
                    className="p-3 py-203 outline-0 w-100 border-gray border-05"
                    name="password"
                    type={`${showPassword ? "text" : "password"}`}
                    id="password"
                    placeholder="Enter Your Password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-danger mt-2"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  className="btn bg-black py-203 px-5 rounded c-white fs-5"
                  type="submit"
                  disabled={isSubmitting}
                  variants={fadeInUp}
                >
                  Sign In
                </motion.button>
              </Form>
            </motion.div>
          )}
        </Formik>
      </div>
    </motion.div>
  );
};

export default AdminPanel;
