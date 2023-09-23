import React from "react";
import "./index.scss";
import one from "../../icons/one.svg";
import two from "../../icons/two.png";
import three from "../../icons/three.png";
const Bonuses = () => {
  return (
    <div id="bonuses">
      <div className="container">
        <div className="bonuses">
          <div className="bonuses__text">
            <h1>
              What do <span>you</span> want to change today?
            </h1>
            <p>
              38 Degrees is a community of more than a million people who – in a
              moment away from their busy days – take small actions on issues
              they care about, which all add up to something bigger, a movement
              for a better Britain for everyone who calls our country home.
            </p>
            <div className="bonuses__text-btn">
              <button>See our impact</button>
              <button className="btn">Start your petition</button>
            </div>
          </div>
          <div className="bonuses__img">fsddf</div>
        </div>
        <div className="arm">
          <div className="arm__ar">
            <img src={one} alt="" />
            <div>
              <h3>274</h3>
              <h4>Currently Online</h4>
            </div>
          </div>
          <div className="arm__ar">
            <img src={two} alt="" />
            <div>
              <h3>274</h3>
              <h4>Currently Online</h4>
            </div>
          </div>
          <div className="arm__ar">
            <img src={three} alt="" />
            <div>
              <h3>274</h3>
              <h4>Currently Online</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bonuses;
