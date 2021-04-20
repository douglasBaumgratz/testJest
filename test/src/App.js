import { useState } from "react";

function App() {
  const [hora, setHora] = useState();
  const [multiplicador, setMultiplicador] = useState();

  const opcao = (e) => {
    const op = e.target.value;
    if (op === "anual") setMultiplicador(30);
    else setMultiplicador(15);
  };

  const calcularHoras = (e) => {
    setHora(e.target.value * multiplicador);
    console.log(hora);
  };

  return (
    <div className="App">
      <div onChange={opcao}>
        <input type="radio" value="anual" name="opcao" /> Anual
        <input type="radio" value="semestral" name="opcao" /> Semestral
      </div>
      <label>
        Digite a quantidade de horas
        <input type="text" name="hora" onChange={calcularHoras} />
      </label>
      <input type="submit" value="enviar" />
      <div>
        <label>Resultado: {hora}</label>
      </div>
    </div>
  );
}

export default App;
