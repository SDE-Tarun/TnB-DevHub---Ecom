import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";

const Signup = () => {
  const [username, setusername] = useState("");

  const [email, setemail] = useState("");

  const [password, setpassword] = useState("");

  const [userData, setuserData] = useState({});

  const { user, setuser } = React.useContext(UserDataContext);

  const navigate = useNavigate();

  // const submitHandler = (e) => {
  //  e.preventDefault();
  //  setuserData({
  //   name: name,
  //   email: email,
  //   password: password
  //  })
  //  setname('');
  //  setemail('');
  //  setpassword('')
  //  console.log(userData);

  // }

  const submitHandler = async (e) => {
    e.preventDefault();
    // setUserData({
    //   fullName: {
    //     firstName: firstName,
    //     lastName: lastName,
    //   },
    //   email: email,
    //   password: password,
    // });
    // console.log(userData);

    const newUser = {
      username: username,
      email: email,
      password: password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/api/auth/signup`,
      newUser
    );

    if (response.status === 201) {
      const data = response.data;

      setuser(data.user);

      navigate("/login");
    }

    setusername("");
    setemail("");
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
          name="name"
          id="name"
          placeholder="Enter your name"
        />
        <br />
        <br />
        <label for="email">Email:</label>
        <br />
        <input
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
        />
        <br />
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
          placeholder="Enter your password"
        />
        <br />
        <br />
        <button>Signup</button>
        <br />
        <p>
          Already a user ? <a href="/login">Login Here</a>
        </p>
      </form>
    </>
  );
};

export default Signup;
