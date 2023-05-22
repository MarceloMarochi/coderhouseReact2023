import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  const imgLogo = "../../img/burgerLogo.png";

  return (
    <header>
      <Link to={"/"}>
        <img className="imgLogo" src={imgLogo} alt="Logo Hamburguesa" />
      </Link>

      {/* <h1>Hamburguesas Marochi</h1> */}

      <nav>
        <ul>
          <li>
            <NavLink to={"/categoria/2"}>Hamburguesas</NavLink>
          </li>
          <li>
            <NavLink to={"/categoria/3"}>Combos</NavLink>
          </li>
        </ul>
      </nav>
      <CartWidget></CartWidget>
    </header>
  );
};

export default NavBar;
