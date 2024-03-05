import React from "react";
import "./Login.scss";
import Header from "../../components/Header/Header";
import { FaUserCircle } from "react-icons/fa";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";

const Login = () => {
  return (
    <div>
      <Header />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <FaUserCircle className="sign-in-icon" />
          <h1>Sign In</h1>
          <Form />
        </section>
          </main>
          <Footer />
    </div>
  );
};

export default Login;
