import PropTypes from "prop-types";

const Producto = ({ producto, onCompleted, onDeleteProduct }) => {
  const getStyle = () => {
    return {
      textDecoration: producto.completed ? "line-through" : "none",
      fontSize: "1.5rem",
      display: "flex",
      alignItems: "center",
      paddingLeft: "2rem",
      marginRight: "2rem",
    };
  };

  return (
    <div style={getStyle()} className="containerItem">
      {producto.producto}
      <input
        className="inputCheck"
        type="checkbox"
        checked={producto.completed}
        onChange={() => onCompleted(producto.id)}
      />
      <button onClick={() => onDeleteProduct(producto.id)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
        >
          <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
        </svg>
      </button>
    </div>
  );
};

Producto.propTypes = {
  producto: PropTypes.shape({
    id: PropTypes.number.isRequired,
    producto: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onCompleted: PropTypes.func.isRequired,
  onDeleteProduct: PropTypes.func.isRequired,
};

export default Producto;