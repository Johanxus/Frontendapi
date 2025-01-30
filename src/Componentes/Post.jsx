import React, { useState } from 'react'
import '../Css/Post.css'
import SeccionComentario from './SeccionComentario'
const Post = ({pasarPost, clave}) => {
  

  return (
    <div className='Caja'>
      {/*<p>{clave}</p> */}
       <h1>{pasarPost.title}</h1>
       {/*<p>{pasarPost.fechadePublicacion}</p>*/}
       <h3>{pasarPost.post}</h3>
      <SeccionComentario pasarPost={pasarPost}/>
      
    </div>
  )
}

export default Post
