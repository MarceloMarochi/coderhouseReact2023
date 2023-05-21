import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ productos }) => {
  return (
    <div className="contenedorProductos">
      {/* Vamos a usar el metodo map como usabamos el forEach en JavaScript */}
      {productos.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
};

export default ItemList;
