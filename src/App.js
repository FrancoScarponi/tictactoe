import { useState } from 'react';
import './App.css';
import { Cuadrado } from './components/Cuadrado';
import { CuadradoTurno } from './components/CuadradoTurno';





function App() {
  const turnos = {
    X: "x",
    O: "o"
  }

  const combos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]


  const [tabla, setTabla] = useState(Array(9).fill(null))
  const [turno, setTurno] = useState(turnos.X)
  const [gano, setGano] = useState(null)

  const checkGana = (boardToCheck) => {
    for (const combo of combos) {
      const [a, b, c] = combo
      if (boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    return null
  }

  const actualizarTabla = (indice) => {
    let nuevaTabla = [...tabla]
    if (gano || tabla[indice]) return

    nuevaTabla[indice] = turno
    setTabla(nuevaTabla)
    setTurno(turno === turnos.X ? turnos.O : turnos.X)


    const newGanador = checkGana(nuevaTabla)
    setGano(newGanador)



  }


  return (
    <main>
      <h1>Tic tac toe</h1>
      <section className='tabla'>
        {
          tabla.map((a, indice) => {
            return (

              <Cuadrado key={indice} indice={indice} tabla={tabla} actualizarTabla={actualizarTabla}></Cuadrado>

            )
          })
        }
      </section>

      <section className='turnos'>
        <CuadradoTurno turnos={turnos.X} seleccionado={turno === turnos.X}></CuadradoTurno>
        <CuadradoTurno turnos={turnos.O} seleccionado={turno === turnos.O}></CuadradoTurno>
      </section>
    </main>
  );
}

export default App;
