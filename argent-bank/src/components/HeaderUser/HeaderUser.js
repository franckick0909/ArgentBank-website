import React from "react";
import "./HeaderUser.scss";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import logo from "../../assets/img/argentBankLogo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const HeaderUser = () => {
  function getUser() {
    let user = localStorage.getItem("user");
    if (user) {
      user = JSON.parse(user);
    } else {
      user = null;
    }
    return user;
  }

  const [user, setUser] = useState(getUser());
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {user ? (
          <>
            <Link to="/user" className="main-nav-item">
              <FaUserCircle />
              {user.firstName}
            </Link>
            <Link to="/" className="main-nav-item" onClick={handleLogout}>
              <FaSignOutAlt />
              Sign Out
            </Link>
          </>
        ) : (
          <>
            <Link to="/user" className="main-nav-item">
              <FaUserCircle />
              Tony
            </Link>
            <Link to="/login" className="main-nav-item">
              <FaSignOutAlt />
              Sign In
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default HeaderUser;

// {user ? (
//   <>
//     <Link to="/user" className="main-nav-item" onClick={handleLogout}>
//       <FaUserCircle />
//       {user.firstName} {user.lastName}
//     </Link>
//   </>
// ) : (
