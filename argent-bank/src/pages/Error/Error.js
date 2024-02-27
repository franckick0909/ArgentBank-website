import React from "react";
import "./Error.scss";

const Error = () => {
  return (
    <section className="error">
      <h1 className="titre-error">404</h1>
      <p className="text-error">
        Sorry, the page you are looking for could not be found.
      </p>

      <a href="/home" className="button-error">
        Go to home page
      </a>
    </section>
  );
};

export default Error;
