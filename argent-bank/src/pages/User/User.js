import React from "react";
import HeaderUser from "../../components/HeaderUser/HeaderUser";
import Account from "../../components/Account/Account";
import Footer from "../../components/Footer/Footer";

const User = () => {
  return (
    <>
      <HeaderUser />
      <main class="main bg-dark">
        <div class="header">
          <h1>
            Welcome back
            <br />
            Tony Jarvis!
          </h1>
          <button class="edit-button">Edit Name</button>
        </div>
        <h2 class="sr-only">Accounts</h2>
        <Account />
      </main>
      <Footer />
    </>
  );
};

export default User;
