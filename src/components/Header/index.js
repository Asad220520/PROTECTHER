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
            <NavLink to={"/create"}>Создать петицию</NavLink>
            <NavLink to={"/myPet"}>Мои петиции</NavLink>
            <NavLink to={"/seePet"}>Просмотреть петиции</NavLink>
            <div className="nav__btn">
              <Link to={"/auth"}>
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
