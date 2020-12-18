import React, { useState, useEffect } from "react";

import Home from "../Page/Home";

const HomeContainer = (props) => {
  useEffect(() => {
    console.log("Home Container useEffect");
    console.log("props: ", props);
  }, []);

  return <Home />;
};

export default HomeContainer;
