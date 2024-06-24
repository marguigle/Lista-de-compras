import "./App.css";
import { useState } from "react";
import ListarCompras from "./components/ListaCompras";
import ComprasForm from "./components/ComprasForm";

function App() {
  const [product, setProduct] = useState([]);
  const [total, setTotal] = useState(0);

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
    // Recalcular el total después de eliminar un producto
    const newTotal = product
      .filter((producto) => producto.id !== id)
      .reduce((acc, prod) => acc + (prod.valor || 0), 0);
    setTotal(newTotal);
  };

  const addProduct = (nuevoProducto) => {
    const newProduct = {
      id: +new Date(),
      producto: nuevoProducto,
      completed: false,
      valor: 0,
    };
    setProduct([...product, newProduct]);
  };

  const handleValorChange = (id, newValor) => {
    const updatedProducts = product.map((producto) => {
      if (producto.id === id) {
        return { ...producto, valor: newValor };
      }
      return producto;
    });
    setProduct(updatedProducts);
    const newTotal = updatedProducts.reduce(
      (acc, prod) => acc + (prod.valor || 0),
      0
    );
    setTotal(newTotal);
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline">Lista de compras</h1>
      <ComprasForm addTask={addProduct} />
      <ListarCompras
        product={product}
        onCompleted={onCompleted}
        onDeleteProduct={onDeleteProduct}
        onValorChange={handleValorChange}
      />
      <p>Total: {total}</p>
    </>
  );
}

export default App;
