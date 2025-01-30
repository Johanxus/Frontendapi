import React, { useEffect, useState } from 'react'
import '../Css/CampoInsertar.css'
import Insertar from './Insertar'
const CampoInsertar = ({setPasarPost2}) => {
  const [clickeado, setClickeado] = useState(false)
  //const [pasarPost, setPasarPost] = useState({titulo: "", input: ""})
  //const [pasarPostq, setPasarPostq] = useState({titulo: "", input: ""})
  const aparece = () =>{
    setClickeado(!clickeado)
  }

  
  return (
    <div className='ContenedorInput'>
      <label htmlFor="insertar" className='cajainsertar'><input type='text' id='insertar' name='insertar' placeholder='Da click para ingresar un nuevo post' onClick={aparece} readOnly className='insertarinput'/></label>
      {clickeado ? <>
        <Insertar setClickeado={aparece} /></> : null}
      
    </div>
  )
}

export default CampoInsertar
