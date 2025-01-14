import React, { Children } from 'react'
import Nieto2 from './Nieto2';

const Hijo2 = (props) => {
  console.log(props);
  return (
    <>
      <div>Hola soy tu hijo</div>
      {props.children}
    </>
)
}

export default Hijo2