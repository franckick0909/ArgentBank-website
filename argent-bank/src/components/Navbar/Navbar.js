import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';
import { FaUserGear } from 'react-icons/fa6';

const Navbar = () => {
    return (
      <>
        <nav className='navAcceuil'>
          <ul>
            <li>
              <NavLink to="/connexion" activeClassName="active">
                {FaUserGear}
              </NavLink>
            </li>
          </ul>
        </nav>
      </>
    );
};

export default Navbar;