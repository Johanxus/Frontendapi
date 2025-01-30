import React, { useState } from 'react'
import '../Css/Insertar.css'
const Insertar = ({setClickeado, setPasarPost}) => {
  const [post, setPost] = useState({titulo: "", input: ""})
  const paso = (e) =>{
    const {name, value} = e.target;
    setPost((prevState) => ({
      ...prevState, [name]: value
    }))
    
  }
  const envio =() =>{
    setPasarPost(post)
  }
  async function envioback() {
      const peticion = await fetch('http://localhost:3000/crear?titulo='+post.titulo+'&post='+post.input+'')
  }
  
  
  return (
    <div className='Caja2'>
        <div className='conten1'>
            <div className='parte1'>
                <h1>CREA TU POST</h1>
            </div>
            <div className='parte2'>
                <p onClick={setClickeado}>Cerrar</p>
            </div>
        </div>
        <label htmlFor="titulo" className='labelcrear'>Titulo
          <input type="text" name='titulo' id='titulo' className='tamañoinput' onChange={paso}/>
        </label>
      <label htmlFor="input" className='labelcrear'>Mensaje
        <textarea name="input" id="input" onChange={paso}></textarea>
      </label>
      <input type="submit" className='enviar' onClick={envioback}/>
    </div>
  )
}

export default Insertar
