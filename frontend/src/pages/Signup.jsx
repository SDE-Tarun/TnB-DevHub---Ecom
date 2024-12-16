import React, { useState } from "react";

const Signup = () => {
  const [name, setname] = useState("");

  const [email, setemail] = useState("");

  const [password, setpassword] = useState("");

  const [userData, setuserData] = useState({});

  const submitHandler = (e) => {
   e.preventDefault();
   setuserData({
    name: name,
    email: email,
    password: password
   })
   setname('');
   setemail('');
   setpassword('')
   console.log(userData);
   
  }

  return (
    <>
      <form onSubmit={(e)=> {
        submitHandler(e);
      }}>
        <label for="name">Name:</label>
        <br />
        <input
          value={name}
          onChange={(e) => {
            setname(e.target.value);
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
