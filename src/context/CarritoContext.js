// Importo el useStete y createContext

import { useState, createContext } from "react";

// Creamos el contexto
export const CarritoContext = createContext({ carrito: [] });

export const CarritoProvider = ({ children }) => {
  // Creamos un estado local carrito con el useState
  const [carrito, setCarrito] = useState([]);

  // Verificamos por consola
  console.log(carrito);

  // Agregamos metodos al proveedor
  // Funcion para agregar productos
  const agregarProductos = (item, cantidad) => {
    if (!yaEstaEnCarrito(item.id)) {
      // prev  => [...prev, {item, cantidad}]
      // Se utiliza para crear un nuevo array a partir
      // del estado anterior (prev)
      setCarrito((prev) => [...prev, { item, cantidad }]);
    } else {
      console.log("Producto ya agregado.");
    }
  };

  // Funcion auxiliar yaEstaEnCarrito
  const yaEstaEnCarrito = (id) => {
    return carrito.some((prod) => prod.id === id);
  };

  // Funcion para eliminar productos
  const eliminarProducto = (id) => {
    const carritoActualizado = carrito.filter((prod) => prod.item.id !== id);
    setCarrito(carritoActualizado);
  };

  // Funcion para vaciar el carrito
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  // Usamos el componente CarritoContext.Provider para enviar
  // el valor acutal del carrito y los metodos a los componentes
  // que lo necesiten

  return (
    // Children: Propiedad especial que se utiliza para representar a todos los componentes
    // que puedan necesitar el carrito y sus metodos
    <CarritoContext.Provider
      value={{ carrito, agregarProductos, eliminarProducto, vaciarCarrito }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
