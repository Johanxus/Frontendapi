import React, { useEffect, useState } from 'react'
import '../Css/BarraBusqueda.css'
const BarraBusqueda = ({paso}) => {

    const [busqueda, setBusqueda] = useState("")
    const actualizar = (e) =>{
      setBusqueda(e.target.value)
    }
    useEffect(()=>{
      paso(busqueda)
    },[busqueda])
  return (
    <div className='cajita'>
      <label htmlFor="busqueda" className='busqueda'>
        <input type='search' id='busqueda' name='busqueda' onChange={actualizar} placeholder='Da dlick y escribe algo para buscar'/>
        
      </label>
    </div>
  )
}

export default BarraBusqueda
