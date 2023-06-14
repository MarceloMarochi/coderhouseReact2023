// Aqui se genera el estado productos
// hacemos la peticion por medio de useEffect, a traves de la funcion getPreoductos
// Hacemos el renderizado pasandoselo a ItemList
// ItemList lo recibe y va mapenado por cada item

import { useState, useEffect } from "react";
// import { getProductos, getProductosPorCategoria } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../service/config";
import { collection, getDocs, where, query } from "firebase/firestore";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams();

  useEffect(() => {
    const misProductos = idCategoria
      ? query(collection(db, "productos"), where("idCat", "==", idCategoria))
      : collection(db, "productos");

    getDocs(misProductos)
      .then((res) => {
        const nuevosProductos = res.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProductos(nuevosProductos);
      })
      .catch((error) => console.log(error));
  }, [idCategoria]);

  /* useEffect(() => {
    const funcionProductos = idCategoria
      ? getProductosPorCategoria
      : getProductos;

    funcionProductos(idCategoria)
      .then((res) => setProductos(res))
      .catch((error) => console.error(error));

    
  }, [idCategoria]); */

  return (
    <div>
      <h2>Productos</h2>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
