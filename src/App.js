import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Redirect } from "react-router";

import Landing from "./Landing/Container/LandingContainer";
import Home from "./Home/Container/HomeContainer";

import "./App.css";

const App = () => {
  const [userObject, setUserObject] = useState({});
  const storeUserObject = (email, password) => {
    setUserObject({ email, password });
  };

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Landing redirectToHome={storeUserObject} />
          </Route>
          <Route path="/home">
            <Home user={userObject} />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
