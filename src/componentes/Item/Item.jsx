import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, precio, img, descripcion }) => {
  return (
    <div className="cardProducto">
      <img className="imgProducto" src={img} alt={nombre} />
      <h3>Nombre: {nombre}</h3>
      <p>Precio: {precio}</p>
      <p>ID: {id}</p>
      <p>Descripcion: {descripcion}</p>
      {/* <button className="btnProducto">Ver Detalles</button> */}

      {/* ALT + 96 para hace (`) */}
      <Link to={`/item/${id}`}>Ver Detalle</Link>
    </div>
  );
};

export default Item;
