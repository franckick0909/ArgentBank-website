import React from "react";
import "./Connexion.scss";
import Header from "../../components/Header/Header";
import { FaUserCircle } from "react-icons/fa";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";

const Connexion = () => {
  return (
    <div>
      <Header />
      <main class="main bg-dark">
        <section class="sign-in-content">
          <FaUserCircle className="sign-in-icon" />
          <h1>Sign In</h1>
          <Form />
        </section>
          </main>
          <Footer />
    </div>
  );
};

export default Connexion;
