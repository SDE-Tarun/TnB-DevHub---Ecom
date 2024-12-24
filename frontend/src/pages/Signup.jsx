// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { UserDataContext } from "../context/UserContext";

// const Signup = () => {
//   const [username, setusername] = useState("");

//   const [email, setemail] = useState("");

//   const [password, setpassword] = useState("");

//   const [userData, setuserData] = useState({});

//   const { user, setuser } = React.useContext(UserDataContext);

//   const navigate = useNavigate();

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     const newUser = {
//       username: username,
//       email: email,
//       password: password,
//     };

//     const response = await axios.post(
//       `${import.meta.env.VITE_BASE_URL}/api/auth/signup`,
//       newUser
//     );

//     if (response.status === 201) {
//       const data = response.data;

//       setuser(data.user);

//       navigate("/login");
//     }

//     setusername("");
//     setemail("");
//     setpassword("");
//   };

//   return (
//     <>
//       <form
//         onSubmit={(e) => {
//           submitHandler(e);
//         }}
//       >
//         <label for="username">Username:</label>
//         <br />
//         <input
//           value={username}
//           onChange={(e) => {
//             setusername(e.target.value);
//           }}
//           type="text"
//           name="name"
//           id="name"
//           placeholder="Enter your name"
//         />
//         <br />
//         <br />
//         <label for="email">Email:</label>
//         <br />
//         <input
//           value={email}
//           onChange={(e) => {
//             setemail(e.target.value);
//           }}
//           type="email"
//           name="email"
//           id="email"
//           placeholder="Enter your email"
//         />
//         <br />
//         <br />
//         <label for="password">Password:</label>
//         <br />
//         <input
//           value={password}
//           onChange={(e) => {
//             setpassword(e.target.value);
//           }}
//           type="password"
//           name="password"
//           id="password"
//           placeholder="Enter your password"
//         />
//         <br />
//         <br />
//         <button>Signup</button>
//         <br />
//         <p>
//           Already a user ? <a href="/login">Login Here</a>
//         </p>
//       </form>
//     </>
//   );
// };

// export default Signup;

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { motion } from "framer-motion";
import HeaderDashed from "../components/HeaderDashed";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const backgroundImage = "https://img.freepik.com/free-photo/covid-pandemic-lifestyle-concept-man-thinking-wearing-face-mask-holding-shopping-bags-imaging-so_1258-153741.jpg?t=st=1735020444~exp=1735024044~hmac=3852694ca468e306db82235184589e7c6950ed85f55648a055f7b884ca07363a&w=1800";
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState(null); // To store backend validation errors
  const navigate = useNavigate();

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
      if (result.errors) {
        setErrors(result.errors); // Set backend validation errors
      } else {
        navigate("/login"); // Navigate to login page on successful signup
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="Signup-Page text-center sec-padd"
      style={{ minHeight: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh", // Takes full viewport height
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // color: "white", // Optional: to make the text more visible
       }}
    >
      <div className="container d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <HeaderDashed head1="Sign" head2="UP" />

        <Formik 
          initialValues={{ username: "", email: "", password: "" }}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="mt-5 d-flex flex-column gap-5 align-items-center border p-4" style={{ maxWidth: '500px', width: '100%' }}>
              <div className="d-flex flex-column align-items-start w-100">
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
              </div>
              <div className="d-flex flex-column align-items-start w-100">
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
              </div>
              <div className="d-flex flex-column align-items-start w-100">
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
              </div>
              <button
                className="btn bg-black py-2 px-4 rounded c-white fs-5"
                type="submit"
                disabled={isSubmitting}
              >
                Create Account
              </button>
              <p className="mt-4">
                Already have an account?{" "}
                <Link to="/login" className="text-primary">
                  Login here
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </motion.div>
  );
};

export default Signup;


