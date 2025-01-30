import React, { useState, useCallback } from 'react'
import '../Css/SeccionComentario.css'
import PostAmpliado from './PostAmpliado'
const SeccionComentario = ({pasarPost, id}) => {
  const [click2, setClick2] = useState(false)
  const click3 = useCallback(() => {
    setClick2(prevClick2 => !prevClick2);
  }, []);
  
  return (
    <div className='Coment' onClick={click3}>
      <p className='parrafoclickeable'>Comentar</p>
      {click2 && <PostAmpliado setVisible={setClick2} pasarPost={pasarPost} />}
    </div>
  )
}

export default SeccionComentario
