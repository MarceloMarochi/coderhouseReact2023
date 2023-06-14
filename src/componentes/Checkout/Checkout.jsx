import React from "react";
import { useState, useEffect, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../service/config";
import { collection, addDoc } from "firebase/firestore";

const Checkout = () => {
  const { carrito, vaciarCarrito } = useContext(CarritoContext);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");

  const manejadorSubmit = (event) => {
    event.preventDefault();

    // Validar que los campos esten completos
    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("Complete todos los campos");
      return;
    }

    // Validamos que los emails coincidan
    if (email !== emailConfirmacion) {
      setError("Los campos del email no coinciden");
      return;
    }

    // Generamos el obj de la orden de compra
    const orden = {
      items: carrito.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
      })),
      total: carrito.reduce(
        (total, producto) => total + producto.item.precio * producto.cantidad,
        0
      ),
      nombre,
      apellido,
      telefono,
      email,
    };

    addDoc(collection(db, "ordenes"), orden)
      .then((docRef) => {
        setOrdenId(docRef.id);
        vaciarCarrito();
      })
      .catch((error) => {
        console.log("Error al creoar la orden", error);
        setError("Se produjo un error al crear la orden, vulva despues");
      });
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={manejadorSubmit}>
        {carrito.map((producto) => (
          <div key={producto.item.id}>
            <p>
              {" "}
              {producto.item.nombre} x {producto.cantidad}{" "}
            </p>
            <p>Precio: ${producto.item.precio}</p>
            <hr />
          </div>
        ))}

        <hr />

        <div>
          <label htmlFor="">Nombre</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="">Apellido</label>
          <input
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="">Telefono</label>
          <input
            type="text"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="">Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="">Email Confirmacion</label>
          <input
            type="text"
            value={emailConfirmacion}
            onChange={(e) => setEmailConfirmacion(e.target.value)}
          />
        </div>

        {error && <p style={{ color: "red" }}> {error}</p>}

        <button type="submit">Finalizar Orden</button>

        {ordenId && (
          <strong>¡Gracias por tu compra! Numero de orden: {ordenId}</strong>
        )}
      </form>
    </div>
  );
};

export default Checkout;
