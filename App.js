import React, { useState } from "react";
import "./App.css";
import axios from "axios";

const BasicForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginData, setLoginData] = useState(undefined);

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log({ email, password });
    const loginRequestPayload = {
      username: email,
      password: password,
    };
    axios
      .post("https://dummyjson.com/auth/login", loginRequestPayload)
      .then((result) => {
        // result.json();
        alert("Successfully logged in");
        console.log(result);

        setLoginData(result.data);
      })
      .catch((error) => {
        alert(error.response.data.message);
        console.log(error);
      });
  };

  return (
    <div className="form-container">
      <form action="" onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="submit-btn"
          disabled={email === "" || password === ""}
          style={{
            cursor: email === "" || password === "" ? "not-allowed" : "pointer",
          }}
        >
          Login
        </button>
      </form>

      {loginData === undefined ? null : (
        <div className="entry-list">{loginData.firstName} logged in</div>
      )}
      <footer className="footer">Made by Jack</footer>
      <footer className="instruction">
        Use username as emilys and password as emilyspass
      </footer>
    </div>
  );
};

export default BasicForm;
