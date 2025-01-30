import React, { useEffect, useState } from 'react'
import '../Css/CrearComentario.css'
import Comentario from './Comentario'
import io from 'socket.io-client';
const socket = io('backendapi-production-ee7a.up.railway.app');
const CrearComentario = ({id}) => {
  const [datosComentario, setDatosComentario] = useState({usuario: "", comentario: ""})
  console.log(id)
  const [presionado, setPresionado] = useState(false)
  const obtenerDatos = (e) =>{
    const {name, value} = e.target;
      setDatosComentario((prevState)=> ({
        ...prevState, [name]: value
      }))
    
  }
  const [arrayrender, setArrayrender] = useState([])
  console.log(id)
  const enviodatos = (e) =>{
    e.preventDefault();
    const {usuario, comentario} = datosComentario;
    if(usuario && comentario){
      setArrayrender(prevArrayRender => [...prevArrayRender,{usuario, comentario}])
      //setDatosComentario({usuario: "", comentario:""})
    }
  }
  async function crearcoment(){
    const peticion = await fetch('https://backendapi-production-ee7a.up.railway.app/crearcomentario?blogid='+id+'&nombre='+datosComentario.usuario+'&comentario='+datosComentario.comentario+'')
  }
  async function mostrarcoment(){
    const conexion = await fetch('https://backendapi-production-ee7a.up.railway.app/comentarios?id='+id+'')
    if(conexion.ok){
      const resultados = await conexion.json()
      setArrayrender(resultados)
    }
  }
  useEffect(()=>{
    mostrarcoment()
  },[arrayrender])

    useEffect(()=>{
      socket.on('comentario', (comentario) => {
        if (comentario.blogid === id) {
          setArrayrender((prevState) => [...prevState, comentario]);
        }
      });
  
      return () => {
        socket.off('nuevoComentario');
      };
    },[id])
  return (
    <div className='comentario'>
      <label htmlFor='usuario' className='labeltext'> Usuario
        <input type="text" name='usuario' id='usuario' className='inputusuario' onChange={obtenerDatos}/>
      </label>
      <label htmlFor="comentario" className='labeltext'>Comentario
        <textarea name="comentario" id="comentario" className='comentarioarea' onChange={obtenerDatos}></textarea>
      </label>
      <input type="submit" className='enviar' onClick={crearcoment}/>
      {arrayrender.map((item, index)=>(
        <Comentario key={index} datos={item}/>
      ))}
    </div>
  )
}

export default CrearComentario
