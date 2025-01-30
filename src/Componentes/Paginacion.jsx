import React from 'react'
import '../Css/Paginacion.css'
const Paginacion = ({paginaactual, paginastotal,cambiodePagina}) => {
    const paginaprevia = () => {
        if (paginaactual > 1) {
          cambiodePagina(paginaactual - 1);
        }
      };
    
      const siguientepagina = () => {
        if (paginaactual < paginastotal) {
          cambiodePagina(paginaactual + 1);
        }
      };
  return (
    <div className='Paginacion'>
      <button onClick={paginaprevia}>Anterior</button>
      <h4>{paginaactual}</h4>
      <button onClick={siguientepagina}> Siguiente</button>
    </div>
  )
}

export default Paginacion
