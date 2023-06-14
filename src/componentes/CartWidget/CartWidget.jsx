import "./CartWidget.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";

const CartWidget = () => {
  const { carrito } = useContext(CarritoContext);

  const totalCantidad = carrito.reduce(
    (total, producto) => total + producto.cantidad,
    0
  );

  const imgCarrito =
    "https://cdn-icons-png.flaticon.com/512/107/107831.png?w=826&t=st=1683423607~exp=1683424207~hmac=fc3b52061c630c939e8d46b0dd46a2bf56c832d5298f965bda367c4ed5356224";
  return (
    <Link to="/cart">
      <img className="imgCarrito" src={imgCarrito} alt="Carrito" />
      {totalCantidad > 0 && <span> {totalCantidad} </span>}
    </Link>
  );
};

export default CartWidget;
