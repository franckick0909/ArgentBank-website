import React from "react";
import "./Header.scss";
import { FaUserCircle } from "react-icons/fa";
import logo from "../../assets/img/argentBankLogo.png";

const Header = () => {
  return (
    <header className="header">
      <nav class="main-nav">
        <a class="main-nav-logo" href="./home">
          <img
            class="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 class="sr-only">Argent Bank</h1>
        </a>
        <div>
          <a class="main-nav-item" href="./connexion">
            <FaUserCircle />
            Sign In
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
