import React from "react";
import HeaderUser from "../../components/HeaderUser/HeaderUser";
import Account from "../../components/Account/Account";
import Footer from "../../components/Footer/Footer";

const User = () => {
  return (
    <>
      <HeaderUser />
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            Tony
          </h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Account />
      </main>
      <Footer />
    </>
  );
};

export default User;
