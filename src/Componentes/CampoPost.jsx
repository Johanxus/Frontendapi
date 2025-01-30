import React, { useEffect, useState } from 'react';
import '../Css/CampoPost.css';
import Post from '../Componentes/Post';
import Paginacion from '../Componentes/Paginacion';

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
      devuelvedatos("http://localhost:3000/posts")
    }else{
      devuelvedatos(`http://localhost:3000/busqueda?titulo=${busqueda}`)
    }
  },[busqueda])
  return (
    <div className='Contenedor'>
      
      {limitesactuales.map((item, index) => (
        <Post key={index} pasarPost={item} clave={index + iniciaindex} />
      ))}
      {paginastotal > 1 && (
        <Paginacion paginaactual={paginaactual} paginastotal={paginastotal} cambiodePagina={cambiodepagina} />
      )}
    </div>
  );
};

export default CampoPost;
