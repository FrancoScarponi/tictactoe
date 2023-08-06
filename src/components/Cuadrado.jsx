import React from 'react'



export const Cuadrado = ({hijo, actualizar, indice, tabla, actualizarTabla}) => {
  
  const handleClick = () => {
    actualizarTabla(indice)
  }

  return (
    <div className='cuadrado' onClick={e => handleClick()}>
      {tabla[indice]}
    </div>
  )
}




