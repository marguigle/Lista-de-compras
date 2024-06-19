import Producto from "./Producto.jsx";

import PropTypes from "prop-types";

const ListaCompras = ({ product, onCompleted, onDeleteProduct }) => {
  if (product.length === 0) {
    return null;
  }

  return (
    <div className="containerList">
      {product.map((producto) => (
        <Producto
          key={producto.id}
          producto={producto}
          onCompleted={onCompleted}
          onDeleteProduct={onDeleteProduct}
        />
      ))}
    </div>
  );
};

ListaCompras.propTypes = {
  product: PropTypes.array.isRequired,
  onCompleted: PropTypes.func.isRequired,
  onDeleteProduct: PropTypes.func.isRequired,
};

export default ListaCompras;
