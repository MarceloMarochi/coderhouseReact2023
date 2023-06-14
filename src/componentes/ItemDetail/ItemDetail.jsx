import React, { useContext } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";

const ItemDetail = ({ id, nombre, precio, img, descripcion, stock }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  // useContext
  const { agregarProductos } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    /* console.log("Productos agregados: " + cantidad); */
    // Creo aca un objeto con el item y la cantidad
    const item = { id, nombre, precio };
    agregarProductos(item, cantidad);
  };

  return (
    <div className="contenedorItem">
      <h2>Nombre: {nombre} </h2>
      <h3>ID: {id}</h3>
      <h3>Precio: {precio}</h3>
      <p>Descripcion: {descripcion}</p>
      <img src={img} alt={nombre} />
      {
        // Ampliamos la logica de montaje y desmontaje de componentes
      }
      {agregarCantidad > 0 ? (
        <Link to="/cart">Terminar Compra</Link>
      ) : (
        <ItemCount
          inicial={1}
          stock={stock}
          funcionAgregar={manejadorCantidad}
        />
      )}
    </div>
  );
};

export default ItemDetail;
