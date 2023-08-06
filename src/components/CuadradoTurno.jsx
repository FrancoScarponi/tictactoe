import React from 'react'

export const CuadradoTurno = ({turnos, seleccionado}) => {
  let clase = `turno ${seleccionado ? "seleccionado": ''}`
  return (
    <div className={clase}><span className='span'>{turnos}</span></div>
  )
}
