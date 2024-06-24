import "./App.css";
import { useState, useEffect } from "react";
import ListarCompras from "./components/ListaCompras";
import ComprasForm from "./components/ComprasForm";

function App() {
  const [product, setProduct] = useState(() => {
    const savedProducts = localStorage.getItem("products");
    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  const [total, setTotal] = useState(() => {
    const savedTotal = localStorage.getItem("total");
    return savedTotal ? JSON.parse(savedTotal) : 0;
  });

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(product));
    const newTotal = product.reduce((acc, prod) => acc + (prod.valor || 0), 0);
    setTotal(newTotal);
    localStorage.setItem("total", JSON.stringify(newTotal));
  }, [product]);

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
  };

  return (
    <>
      <h1 className="text-3xl font-bold pb-2 ">Lista de compras</h1>
      <ComprasForm addTask={addProduct} />
      <ListarCompras
        product={product}
        onCompleted={onCompleted}
        onDeleteProduct={onDeleteProduct}
        onValorChange={handleValorChange}
      />
      <p className="text-emerald-800 font-medium mt-3 text-2xl">
        Total: {total}
      </p>
    </>
  );
}

export default App;
