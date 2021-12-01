import React, { useState } from "react";
import { connect } from "react-redux";
import { signup } from "./../../Redux/auth/authActions";

const SignupForm = ({ signup }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    var credential = {
      fullName,
      email,
      password,
    };
    signup(credential);
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          onChange={(e) => setFullName(e.target.value)}
          value={fullName}
          type="text"
          placeholder="fullName"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="text"
          placeholder="Email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="text"
          placeholder="Password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

var actions = {
  signup,
};

export default connect(null, actions)(SignupForm);
