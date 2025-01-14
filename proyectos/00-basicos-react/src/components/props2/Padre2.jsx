import React, { useState } from 'react'
import Hijo2 from './Hijo2'

const Padre2 = (props) => {

  return (
    <>
        <div>Hola soy tu padre</div>
        {props.children}
    </>
  )
}

export default Padre2