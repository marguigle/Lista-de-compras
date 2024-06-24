/* eslint-disable react/prop-types */

import Producto from "./Producto";

const ListarCompras = ({
  product,

  onCompleted,
  onDeleteProduct,
  onValorChange,
}) => {
  return (
    <div>
      {product.map((producto) => (
        <Producto
          key={producto.id}
          producto={producto}
          onCompleted={onCompleted}
          onDeleteProduct={onDeleteProduct}
          onValorChange={onValorChange}
        />
      ))}
    </div>
  );
};

export default ListarCompras;
