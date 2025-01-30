import React from 'react'
import CrearComentario from './CrearComentario'
import '../Css/PostAmpliado.css'

const PostAmpliado = ({setVisible, pasarPost}) => {
  const detener = (e) =>{
    e.stopPropagation()
  }
  const clack = () =>{
    setVisible(false)
  }
  return (
    <div className='contenedor2' onClick={detener}>
      <div className='Cerrar'>
        <p onClick={clack} className='cerrar'>Cerrar</p>
      </div>
      <h1 className='titulo'>{pasarPost.title}</h1>
      <h3 className='post'>{pasarPost.post}</h3>
      <CrearComentario id={pasarPost.id}/>
    </div>
  )
}

export default PostAmpliado
