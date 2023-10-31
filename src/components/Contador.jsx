import PropTypes from "prop-types";
import "../Styles/contador.css";

function Contador({ numClics }) {
  return <div className="contador">{numClics}</div>;
}

Contador.propTypes = {
  numClics: PropTypes.number.isRequired,
};

export default Contador;
