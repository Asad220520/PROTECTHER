import React from "react";
import Bonuses from "../Bonuses";
import NadFooter from "../nadFooter";
import Current from "../current";

const HomePage = () => {
  return (
    <div id="homePage">
      <div className="container">
        <div className="homePage">
          <Bonuses />
          <Current/>
          <NadFooter/>
        </div>
      <div className="homePage">
        <Bonuses />
      </div>
    </div>
  );
};

export default HomePage;
