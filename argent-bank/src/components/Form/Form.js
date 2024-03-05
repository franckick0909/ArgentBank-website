import "./Form.scss";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../Store/UserSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Form = () => {

  // states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //redux state
  const { loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginEvent = (e) => {
    e.preventDefault();
    let userCredentials = {
      email,
      password,
    };
    dispatch(loginUser(userCredentials)).then((result) => {
      if (result.payload) {
        setEmail("");
        setPassword("");
        navigate("/user");      }
    });
  };

  return (
    <form onSubmit={handleLoginEvent}>
      <div className="input-wrapper">
        <label htmlFor="email">Email</label>
        <input
          required
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          required
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>

      <Link to="/user" className="sign-in-button">
        home
      </Link>

      <button className="sign-in-button">
        {loading ? "Loading..." : "Sign In"}
      </button>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )} 
    </form>
  );
};

export default Form;
