// import React, { useState } from "react";

// import { useNavigate } from "react-router-dom";

// import { UserDataContext } from "../context/UserContext";

// import axios from "axios";

// const Login = () => {
//   const [username, setusername] = useState("");

//   const [password, setpassword] = useState("");

//   const [userData, setuserData] = useState({});

//   const { user, setuser } = React.useContext(UserDataContext);

//   const navigate = useNavigate();

//   const submitHandler = async (e) => {
//     e.preventDefault();

//     const user = {
//       username: username,
//       password: password,
//     };

//     const response = await axios.post(
//       `${import.meta.env.VITE_BASE_URL}/api/auth/login`,
//       user
//     );

//     if (response.status === 200) {
//       const data = response.data;
//       setuser(data.user);
//       navigate("/");
//     }

//     setusername("");
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
//           name="username"
//           id="username"
//         />
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
//         />
//         <br />
//         <br />
//         <button>Login</button>
//         <br />
//         <p>
//           New here ? <a href="/signup">Create User</a>
//         </p>
//       </form>
//     </>
//   );
// };

// export default Login;

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { motion } from "framer-motion";
import HeaderDashed from "../components/HeaderDashed";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const backgroundImage = "https://img.freepik.com/free-photo/side-view-happy-woman-with-guitar_23-2148751489.jpg?t=st=1735019860~exp=1735023460~hmac=354c7a2e5a940cdfae0ab7aa54a26fd8ecbee6f82018611391211a2256e93934&w=2000";
  const [showPassword, setShowPassword] = useState(false);
  const [serverErrors, setServerErrors] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    // Reset any previous errors
    setServerErrors([]);

    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful", data);
        navigate("/");
        // Handle successful login here (e.g., redirect)
      } else {
        const data = await response.json();
        setServerErrors(data.errors || []);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="Login-Page text-center sec-padd"
      style={{
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
      <div className="container">
        <HeaderDashed head1="Log" head2="IN" />

        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="mt-5 d-flex flex-column gap-5 align-items-center border border-2 p-4">
              <div className="d-flex flex-column align-items-start w-100">
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
              </div>

              {/* Displaying server-side errors */}
              {serverErrors.length > 0 && (
                <div className="text-danger mt-3">
                  {serverErrors.map((error, index) => (
                    <p key={index}>{error.msg}</p>
                  ))}
                </div>
              )}

              <button
                className="btn bg-black py-2 px-4 rounded c-white fs-5"
                type="submit"
                disabled={isSubmitting}
              >
                Sign In
              </button>
              <p className="mt-4">
                New here?{" "}
                <Link to="/signup" className="text-primary">
                  Create account
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </motion.div>
  );
};

export default Login;
