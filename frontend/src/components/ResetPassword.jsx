import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import HeaderDashed from "../components/HeaderDashed"; // Assuming this is the same header component as in AdminPanel.jsx
import { toast } from "react-toastify"; // Importing toast from react-toastify
import "react-toastify/dist/ReactToastify.css"; // Importing the default toast styles

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset error message before making the request
  setError("");
  setSuccess("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      toast.error("Passwords do not match"); // Display error toast
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:3000/api/auth/reset-password/${token}`,
        { password }
      );
      setSuccess(response.data.message);
      toast.success(response.data.message); // Show success toast
      setTimeout(() => navigate("/login"), 3000); // Redirect to login after success
    } catch (err) {
      setError(err.response ? err.response.data.message : "Something went wrong");
      toast.error(err.response ? err.response.data.message : "Something went wrong"); // Show error toast
    }
  };

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
      className="reset-password-container text-center sec-padd"
    >
      <div className="container">
        {/* Header with animation */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible">
          <HeaderDashed head1="RESET" head2="PASSWORD" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <form
            className="mt-5 d-flex flex-column gap-5 align-items-center"
            onSubmit={handleSubmit}
            style={{
              maxWidth: "500px", // Limit width on large screens
              width: "100%", // Make sure the form takes full width on small screens
              margin: "0 auto", // Center the form
            }}
          >
            {/* Error/Success Message */}
            {error && <div className="text-danger mt-2">{error}</div>}
            {success && <div className="text-success mt-2">{success}</div>}

            {/* New Password Field */}
            <motion.div
              className="d-flex flex-column align-items-start w-100"
              variants={fadeInUp}
            >
              <label htmlFor="password" className="mb-2 fs-4">
                New Password:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className="p-3 py-203 outline-0 w-100 border-gray border-05"
                placeholder="Enter new password"
                required
                style={{
                  padding: "1rem",
                  fontSize: "1rem",
                }}
              />
            </motion.div>

            {/* Confirm Password Field */}
            <motion.div
              className="d-flex flex-column align-items-start w-100"
              variants={fadeInUp}
            >
              <label htmlFor="confirmPassword" className="mb-2 fs-4">
                Confirm Password:
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                className="p-3 py-203 outline-0 w-100 border-gray border-05"
                placeholder="Confirm your password"
                required
                style={{
                  padding: "1rem",
                  fontSize: "1rem",
                }}
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              className="btn bg-black py-203 px-5 rounded c-white fs-5"
              type="submit"
              variants={fadeInUp}
              style={{
                fontSize: "1rem",
                padding: "1rem 2rem",
                borderRadius: "0.25rem",
              }}
            >
              Reset Password
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ResetPassword;
