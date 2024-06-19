import "./App.css";
import { useState } from "react";
import ListarCompras from "./components/ListaCompras";
import ComprasForm from "./components/ComprasForm";

function App() {
  const [product, setProduct] = useState([]);

  const onCompleted = (id) => {
    setProduct(
      product.map((producto) =>
        producto.id === Number(id)
          ? { ...producto, completed: !producto.completed }
          : producto
      )
    );
  };

  const onDeleteProduct = (id) => {
    setProduct(product.filter((producto) => producto.id !== id));
  };

  const addProduct = (nuevoProducto) => {
    const newProduct = {
      id: +new Date(),
      producto: nuevoProducto,
      completed: false,
    };
    setProduct([...product, newProduct]);
  };

  return (
    <>
      <h1>Lista de compras</h1>
      <ComprasForm addTask={addProduct} />
      <ListarCompras
        product={product}
        onCompleted={onCompleted}
        onDeleteProduct={onDeleteProduct}
      />
    </>
  );
}

export default App;
