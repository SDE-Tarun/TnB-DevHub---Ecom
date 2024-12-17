import React, { useState } from "react";

const Login = () => {
  const [email, setemail] = useState("");

  const [password, setpassword] = useState("");

  const [userData, setuserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setuserData({
      email: email,
      password: password,
    });
    setemail("");
    setpassword("");
    console.log(userData);
  };

  return (
    <>
      <form onSubmit={(e)=>{
        submitHandler(e);
      }}>
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
        />
        <br />
        <label for="password">Password:</label>
        <br />
        <input value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }} type="password" name="password" id="password" />
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
