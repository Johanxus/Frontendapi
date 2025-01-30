import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CampoPost from './Componentes/CampoPost'
import CampoInsertar from './Componentes/CampoInsertar'
import BarraBusqueda from './Componentes/BarraBusqueda'
import Insertar from './Componentes/Insertar'
import PostAmpliado from './Componentes/PostAmpliado'

function App() {
   const[busqueda, setBusqueda] = useState("")
   console.log(busqueda)
  return (
    <>
      <BarraBusqueda paso={setBusqueda} />
      <CampoInsertar />
      <CampoPost busqueda={busqueda}/>
      
      
    </>
  )
}

export default App
