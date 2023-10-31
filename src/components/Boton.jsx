import PropTypes from "prop-types";
import "../Styles/boton.css";

function Boton({ texto, esBotonDeClic, manejarClic }) {
  return (
    <button
      className={esBotonDeClic ? "botonClic" : "botonReiniciar"}
      onClick={manejarClic}
    >
      {texto}
    </button>
  );
}

Boton.propTypes = {
  texto: PropTypes.string.isRequired,
  esBotonDeClic: PropTypes.bool.isRequired,
  manejarClic: PropTypes.func.isRequired,
};

export default Boton;
