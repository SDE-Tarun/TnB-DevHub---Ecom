import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { UserDataContext } from "../context/UserContext";

import axios from "axios";

const Login = () => {
  const [username, setusername] = useState("");

  const [password, setpassword] = useState("");

  const [userData, setuserData] = useState({});

  const { user, setuser } = React.useContext(UserDataContext);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const user = {
      username: username,
      password: password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/api/auth/login`,
      user
    );

    if (response.status === 200) {
      const data = response.data;
      setuser(data.user);
      navigate("/");
    }

    setusername("");
    setpassword("");
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <label for="username">Username:</label>
        <br />
        <input
          value={username}
          onChange={(e) => {
            setusername(e.target.value);
          }}
          type="text"
          name="username"
          id="username"
        />
        <br />
        <label for="password">Password:</label>
        <br />
        <input
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
          type="password"
          name="password"
          id="password"
        />
        <br />
        <br />
        <button>Login</button>
        <br />
        <p>
          New here ? <a href="/signup">Create User</a>
        </p>
      </form>
    </>
  );
};

export default Login;
