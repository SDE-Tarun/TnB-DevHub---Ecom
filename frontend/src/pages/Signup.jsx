import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { motion } from "framer-motion";
import HeaderDashed from "../components/HeaderDashed";
import { useNavigate, Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// React Toastify imports
import { toast } from 'react-toastify';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState(null); // To store backend validation errors
  const navigate = useNavigate();

  // const { login } = useAuth(); // Access login function

  const handleSubmit = async (values) => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      const user = result.newUser;

      if (response.status === 400) {
        toast.error(result.message); // Show error toast
      } else {
        // Update context and navigate
        // login(result.newUser); // Update context
        navigate("/login");
        toast.success('User created successfully!'); // Show success toast
      }
    } catch (error) {
      console.error("Error during signup:", error);
      toast.error("Something went wrong. Please try again!"); // Show generic error toast
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="Signup-Page text-center sec-padd"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="container d-flex flex-column justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <HeaderDashed head1="Sign" head2="UP" />

        <Formik
          initialValues={{ username: "", email: "", password: "" }}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form
              className="mt-5 d-flex flex-column gap-5 align-items-center border border-2 p-4"
              style={{ maxWidth: "500px", width: "100%" }}
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="d-flex flex-column align-items-start w-100"
              >
                <label htmlFor="username" className="mb-2 fs-4">
                  Username:
                </label>
                <Field
                  className="p-3 py-203 outline-0 w-100 border-gray border-05"
                  name="username"
                  type="text"
                  id="username"
                  placeholder="Enter Your Username"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-danger mt-2"
                />
                {errors && errors.username && (
                  <div className="text-danger">{errors.username}</div>
                )}
              </motion.div>

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
                  className="p-3 py-203 outline-0 w-100 border-gray border-05"
                  name="email"
                  type="email"
                  id="email"
                  placeholder="example@gmail.com"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-danger mt-2"
                />
                {errors && errors.email && (
                  <div className="text-danger">{errors.email}</div>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="d-flex flex-column align-items-start w-100"
              >
                <label
                  htmlFor="password"
                  className="mb-2 fs-4 w-100 d-flex justify-content-between"
                >
                  Password:{" "}
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
                {errors && errors.password && (
                  <div className="text-danger">{errors.password}</div>
                )}
              </motion.div>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="btn bg-black py-2 px-4 rounded c-white fs-5"
                type="submit"
                disabled={isSubmitting}
              >
                Create Account
              </motion.button>

              {/* <button class="cursor-pointer text-black flex gap-2 items-center bg-white px-4 py-2 rounded-lg font-medium text-medium hover:bg-zinc-300 transition-all ease-in duration-200">
                <svg
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6"
                >
                  <path
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    fill="#FFC107"
                  ></path>
                  <path
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    fill="#FF3D00"
                  ></path>
                  <path
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    fill="#4CAF50"
                  ></path>
                  <path
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    fill="#1976D2"
                  ></path>
                </svg>
                Continue with Google
              </button> */}

{/* <button class="button" type="button">
  <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" class="svg">
  <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" class="blue"></path>
  <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" class="green"></path>
  <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" class="yellow"></path>
  <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" class="red"></path>
</svg>
<span class="text">Continue with Google</span>
</button> */}

              {/* <button class="cursor-pointer text-black flex gap-2 items-center bg-white px-4 py-2 rounded-lg font-medium text-medium hover:bg-zinc-300 transition-all ease-in duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M6 2H18C18.552 2 19 2.448 19 3V21C19 21.552 18.552 22 18 22H6C5.448 22 5 21.552 5 21V3C5 2.448 5.448 2 6 2ZM12 18C13.104 18 14 17.104 14 16C14 14.896 13.104 14 12 14C10.896 14 10 14.896 10 16C10 17.104 10.896 18 12 18ZM7 3H17V19H7V3Z"></path>
                </svg>
                Continue with Mobile Number
              </button> */}

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mt-4"
              >
                Already have an account?{" "}
                <Link to="/login" className="text-primary">
                  Login here
                </Link>
              </motion.p>
            </Form>
          )}
        </Formik>
      </div>
    </motion.div>
  );
};

export default Signup;
