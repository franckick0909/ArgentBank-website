import React from 'react';
import './HeaderUser.scss';
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import logo from '../../assets/img/argentBankLogo.png';

const HeaderUser = () => {
    return (
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
          <a class="main-nav-item" href="./user">
            <FaUserCircle />
            Tony
          </a>
          <a class="main-nav-item" href="./home">
            <FaSignOutAlt />
            Sign Out
          </a>
        </div>
      </nav>
    );
};

export default HeaderUser;