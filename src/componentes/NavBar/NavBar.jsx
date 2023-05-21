import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <header>
      <h1>Hamburguesasas Marochi</h1>
      <nav>
        <ul>
          <li>Combos</li>
          <li>Hamburguesas</li>
          <li>Bebidas</li>
        </ul>
      </nav>
      <CartWidget></CartWidget>
    </header>
  );
};

export default NavBar;
