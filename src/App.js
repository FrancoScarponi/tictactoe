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
    if (newGanador) {
      setGano(newGanador)
    } else if (!nuevaTabla.includes(null)) {
      setGano(false)
    }

  }

  const resetGame = () => {
    setGano(null)
    setTabla(Array(9).fill(null))
    setTurno(turnos.X)
  }


  return (
    <main>
      <h1>Ta te ti</h1>
      <section className='tabla'>
        {
          tabla.map((a, indice) => {
            return (
              <Cuadrado key={indice} indice={indice} tabla={tabla} actualizarTabla={actualizarTabla}>
              </Cuadrado>
            )
          })
        }
      </section>
      
      {/*Turnos parte de abajo*/}
      <section className='turnos'>
        <CuadradoTurno turnos={turnos.X} seleccionado={turno === turnos.X}></CuadradoTurno>
        <CuadradoTurno turnos={turnos.O} seleccionado={turno === turnos.O}></CuadradoTurno>
      </section>


      {/*Cartel del resultado*/}
      {
        gano != null && (
          <section className='winner'>
            <div className='texto'>
              <h2>
                {
                  gano === false
                    ? 'Empate'
                    : `Gano: ${gano}`
                }
              </h2>
              <footer>
                <button className='btn' onClick={resetGame}>Empezar de nuevo</button>
              </footer>
            </div>
          </section>
        )
      }


    </main>
  );
}

export default App;
