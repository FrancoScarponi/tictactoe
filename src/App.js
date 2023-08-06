import { useState } from 'react';
import './App.css';
import { Cuadrado } from './components/Cuadrado';
import { CuadradoTurno } from './components/CuadradoTurno';



function App() {
  const turnos = {
    X: "x",
    O: "o"
  }

  const [tabla, setTabla] = useState(Array(9).fill(null))
  const [turno, setTurno] = useState(turnos.X)

  const actualizarTabla = (indice)=>{
    if (tabla[indice] === null){
      let nuevaTabla = [... tabla]
      nuevaTabla[indice] = turno
      setTabla(nuevaTabla)
      setTurno(turno===turnos.X ? turnos.O : turnos.X)
    }
    
  }


  return (
    <main>
      <h1>Tic tac toe</h1>
      <section className='tabla'>
        {
          tabla.map((a, indice) =>{
            return (
              
              <Cuadrado key={indice} indice={indice} tabla={tabla} actualizarTabla={actualizarTabla}></Cuadrado>
              
            )
          })
        }
      </section>

      <section className='turnos'>
        <CuadradoTurno turnos={turnos.X} seleccionado={turno===turnos.X}></CuadradoTurno>
        <CuadradoTurno turnos={turnos.O} seleccionado={turno===turnos.O}></CuadradoTurno>
      </section>
    </main>
  );
}

export default App;
