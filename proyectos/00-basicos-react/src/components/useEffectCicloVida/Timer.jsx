import React, { useEffect, useState } from 'react'

/*
useEffect(() => {
    //nunca utilizar async awair dentro de useefect
    console.log("Componente montado");

    //si no le paso ARRAY de dependencias se ejecuta cada vez que se renderiza el componente
  })

useEffect(() => {
    console.log("Componente montado solo una vez");
}, [])
    
*/  

const Timer = () => {
    const [ counter, setCounter ] = useState(0);
    const [ counter2, setCounter2 ] = useState(0);

    useEffect(() => {
      console.log("Componente renderizado cada vez que se modifica algo del array de dependencias");
    }, [counter])
    
  return (
    <>
        <div>Timer</div>
        <p>{counter}</p>
        <p>{counter2}</p>
        <button onClick={()=>setCounter((prevCounter) => prevCounter+1)}>Iniciar</button>
        <button onClick={()=>setCounter2((prevCounter2) => prevCounter2+1)}>Iniciar</button>
    </>
  )
}

export default Timer