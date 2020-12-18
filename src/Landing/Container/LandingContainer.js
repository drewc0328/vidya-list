import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";

import Landing from "../Page/Landing";

const LandingContainer = (props) => {
  useEffect(() => {
    console.log("LandingContainer UseEffect");
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectHome, setRedirectHome] = useState(false);

  const setEmailHandler = (email) => {
    console.log(email);
    setEmail(email);
  };

  const setPasswordHandler = (password) => {
    console.log(password);
    setPassword(password);
  };

  const setSubmitHandler = () => {
    console.log("Email: ", email);
    console.log("Password: ", password);
    props.redirectToHome(email, password);
    setRedirectHome(true);
  };

  return (
    <div>
      {redirectHome && <Redirect to="/home" />}
      <Landing
        email={setEmailHandler}
        password={setPasswordHandler}
        submit={setSubmitHandler}
      />
    </div>
  );
};

export default LandingContainer;
