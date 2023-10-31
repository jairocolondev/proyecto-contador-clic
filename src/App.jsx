import { useState } from "react";
import imagenContadorClics from "./assets/imagenContadorClics.png";
import Boton from "./components/Boton";
import Contador from "./components/Contador";

function App() {
  const [numClics, setClics] = useState(0);

  const manejarClic = () => {
    setClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setClics(0);
  };

  return (
    <div className="contenedor">
      <div className="imagenContadorClics">
        <img src={imagenContadorClics} alt="Imagen Contador de clics" />
      </div>
      <div className="contenedorPrincipal">
        <Contador numClics={numClics} />
        <Boton texto="Clic" esBotonDeClic={true} manejarClic={manejarClic} />
        <Boton
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
