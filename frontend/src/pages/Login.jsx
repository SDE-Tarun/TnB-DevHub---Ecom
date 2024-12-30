import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { motion } from "framer-motion";
import HeaderDashed from "../components/HeaderDashed";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from 'react-toastify';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [serverErrors, setServerErrors] = useState([]);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleGoogleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/auth/google/login');
      const data = await response.json();
      window.location.href = data.authUrl; // Redirect to Google Auth
    } catch (error) {
      console.error('Error fetching auth URL:', error);
    }
  };

  const handleSubmit = async (values) => {
    setServerErrors([]);

    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const data = await response.json();
        // Store user data in AuthContext and localStorage
        login(data.user);
        toast.success("User logged in successfully!");
        navigate("/");
      } else {
        const data = await response.json();
        setServerErrors(data.errors || []);
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("An unexpected error occurred. Please try again.");
    }
  };

  const fieldAnimation = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const buttonAnimation = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="Login-Page text-center sec-padd"
    >
      <div className="container">
        <HeaderDashed head1="Log" head2="IN" />

        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="mt-5 d-flex flex-column gap-5 align-items-center border border-2 p-4">
              <motion.div
                className="d-flex flex-column align-items-start w-100"
                initial="hidden"
                animate="visible"
                variants={fieldAnimation}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <label htmlFor="username" className="mb-2 fs-4">
                  Username:
                </label>
                <Field
                  className="p-3 py-203 outline-0 w-100 border-gray border-05"
                  name="username"
                  type="text"
                  id="username"
                  placeholder="example@gmail.com"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-danger mt-2"
                />
              </motion.div>

              <motion.div
                className="d-flex flex-column align-items-start w-100"
                initial="hidden"
                animate="visible"
                variants={fieldAnimation}
                transition={{ duration: 0.5, delay: 0.2 }}
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
              </motion.div>

              {serverErrors.length > 0 && (
                <motion.div
                  className="text-danger mt-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {serverErrors.map((error, index) => (
                    <p key={index}>{error.msg}</p>
                  ))}
                </motion.div>
              )}

              <motion.button
                className="btn bg-black py-2 px-4 rounded c-white fs-5"
                type="submit"
                disabled={isSubmitting}
                {...buttonAnimation}
              >
                Log In
              </motion.button>

              <button type="button" onClick={handleGoogleLogin} class="cursor-pointer text-black flex gap-2 items-center bg-white px-4 py-2 rounded-lg font-medium text-medium hover:bg-zinc-300 transition-all ease-in duration-200">
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
              </button>

              <button class="cursor-pointer text-black flex gap-2 items-center bg-white px-4 py-2 rounded-lg font-medium text-medium hover:bg-zinc-300 transition-all ease-in duration-200">
                {/* <!-- New Mobile Phone Icon --> */}
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
              </button>

              <motion.p
                className="mt-4"
                initial="hidden"
                animate="visible"
                variants={fieldAnimation}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                New here?{" "}
                <Link to="/signup" className="text-primary">
                  Create account
                </Link>
              </motion.p>
            </Form>
          )}
        </Formik>
      </div>
    </motion.div>
  );
};

export default Login;
