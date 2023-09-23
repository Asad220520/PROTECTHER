import React from "react";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import { BiSolidUserCircle } from "react-icons/bi";

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <h1>logo</h1>
          <nav className="nav">
            <NavLink to={"/campaigns"}>Campaigns</NavLink>
            <NavLink to={"/latest"}>Latest</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/donate"}>Donate</NavLink>
            <div className="nav__btn">
              <Link>
                <BiSolidUserCircle style={{ fontSize: "28px" }} />
              </Link>
              <button>Start a Petition</button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
