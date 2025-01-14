function Nieto(props){
    const { counter, handleClick } = props
    return(
        <>
        <h1>Hola yo soy el nieto </h1>
        <p>El contador vale {counter}</p>
        <button className='bg-pink-600 text-white px-2 py-5 mb-5 mt-6 rounded-lg hover:bg-pink-800' onClick={handleClick}>Aumento el contador desde el nieto</button>
        </>    
    )
}
export default Nieto