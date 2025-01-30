import React from 'react'
import '../Css/Comentario.css'
const Comentario = ({datos}) => {
  return (
    <div className='CajaComentario'>
      <div className='comentario2'>
        <h6 className='Usuario'>{datos.UsuarioNombre}</h6>
        <p>{datos.Comentario}</p>
      </div>
    </div>
  )
}

export default Comentario
