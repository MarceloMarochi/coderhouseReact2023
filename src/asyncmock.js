const productos = [
  {
    nombre: "Simple",
    precio: 1500,
    id: 1,
    img: "./img/simple.png",
    descripcion: "Hamburguesa Simple",
  },
  {
    nombre: "Doble",
    precio: 1750,
    id: 2,
    img: "./img/doble.png",
    descripcion: "Hamburguesa Doble",
  },
  {
    nombre: "Triple",
    precio: 2000,
    id: 3,
    img: "./img/triple.png",
    descripcion: "Hamburguesa Triple",
  },
  {
    nombre: "Big Combo",
    precio: 2500,
    id: 4,
    img: "./img/combo.png",
    descripcion: "Combo de hamburguesa con papas",
  },
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
};
