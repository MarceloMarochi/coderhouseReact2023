import "./CartWidget.css";

const CartWidget = () => {
  const imgCarrito =
    "https://cdn-icons-png.flaticon.com/512/107/107831.png?w=826&t=st=1683423607~exp=1683424207~hmac=fc3b52061c630c939e8d46b0dd46a2bf56c832d5298f965bda367c4ed5356224";
  return (
    <div>
      <img className="imgCarrito" src={imgCarrito} alt="Carrito" />
      {/* <strong className="num">24</strong> */}
    </div>
  );
};

export default CartWidget;
