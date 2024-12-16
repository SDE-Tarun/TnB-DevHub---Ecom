const validateSignupData = (username, email, password) => {
  if (!username || !email || !password) {
    console.log("Error in validation at Signup --> All fields are not present");
    return { valid: false, message: "All fields are requried" };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    console.log("Error in email format");
    return { valid: false, message: "Invalid email format" };
  }
  return { valid: true };
};

const validateLoginData = (username, password) => {
  if (!username || !password) {
    console.log("Error in validation at Login --> All fields are not present");
    return { valid: false, message: "All fields are requried" };
  }
  return { valid: true };
};

module.exports = { validateSignupData, validateLoginData };
