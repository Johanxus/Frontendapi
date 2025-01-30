import React, { useEffect, useState } from 'react';
import '../Css/CampoPost.css';
import Post from '../Componentes/Post';
import Paginacion from '../Componentes/Paginacion';
import io from 'socket.io-client';
const socket = io('https://backendapi-production-ee7a.up.railway.app');
const CampoPost = ({ busqueda }) => {
  const [render, setRender] = useState([]);
  const [paginaactual, setpaginaactual] = useState(1);
  const limitepagina = 3;
  const paginastotal = Math.ceil(render.length / limitepagina);
    const iniciaindex = (paginaactual - 1) * limitepagina;
    const limitesactuales = render.slice(iniciaindex, iniciaindex + limitepagina);
    const cambiodepagina = (pagina) => {
      setpaginaactual(pagina); 
    };
      const devuelvedatos = async(url) =>{
        const peticion = await fetch(url);
        if(peticion.ok){
          const respuesta = await peticion.json();
          setRender(respuesta)
        }
      }
  useEffect(()=>{
    if(busqueda.trim().length === 0){
      devuelvedatos("https://backendapi-production-ee7a.up.railway.app/posts")
    }else{
      devuelvedatos(`https://backendapi-production-ee7a.up.railway.app/busqueda?titulo=${busqueda}`)
    }
  },[busqueda])
  useEffect(() => {
    socket.on('nuevoPost', (nuevoPost) => {
      setRender(prevRender => [nuevoPost, ...prevRender]);
    });

    return () => {
      socket.off('nuevoPost');
    };
  }, []);
  console.log(render)
  return (
    <div className='Contenedor'>
      
      {limitesactuales.map((item, index) => (
        <Post key={item.id} pasarPost={item} clave={index + iniciaindex} />
      ))}
      {paginastotal > 1 && (
        <Paginacion paginaactual={paginaactual} paginastotal={paginastotal} cambiodePagina={cambiodepagina} />
      )}
    </div>
  );
};

export default CampoPost;
