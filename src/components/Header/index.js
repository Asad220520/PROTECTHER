import React from "react";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import { BiSolidUserCircle } from "react-icons/bi";
import logo from "../../image/MyLaw.svg";
const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <Link to={"/"}>
            <img width={150} src={logo} alt="" />
          </Link>
          <nav className="nav">
            <NavLink to={"/help"}>Мне нужна помощь</NavLink>
            <NavLink to={"/pro"}>ПРО Насилие</NavLink>
            <NavLink to={"/map"}>Карта центров помощи</NavLink>
            <NavLink to={"/aboutus"}>О нас</NavLink>
            <NavLink to={"/lesson"}>Обучение</NavLink>
            <NavLink to={"/sos"}>SOS-размещение</NavLink>
            {/* <NavLink to={"/create"}>Создать петицию</NavLink>
            <NavLink to={"/myPet"}>Мои петиции</NavLink>
            <NavLink to={"/seePet"}>Просмотреть петиции</NavLink> */}
            <div className="nav__btn">
              <Link to={"/auth"}>
                <BiSolidUserCircle style={{ fontSize: "28px" }} />
              </Link>
              <button>Поддержать Центр</button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
