import React from 'react'
import Nieto from './Nieto';

const Hijo = (props) => {
    console.log(props);
    const { counter, handleClick } = props;
  return (
    <>
       <div>Hola soy tu hijo</div>
       <p>El contador vale {counter}</p>
       <button className='bg-blue-600 text-white px-2 py-5 mb-5 mt-6 rounded-lg hover:bg-blue-800' onClick={handleClick}>Aumento el contador desde el hijo</button>
       <Nieto counter={counter} handleClick={handleClick}/>
    </>
)
}

export default Hijo