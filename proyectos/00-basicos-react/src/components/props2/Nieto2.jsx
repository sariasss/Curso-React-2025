function Nieto2(props){
    const { handleClick } = props;
    return(
        <>
        <h1>Hola yo soy el nieto </h1>
        <button className='bg-pink-600 text-white px-2 py-5 mb-5 mt-6 rounded-lg hover:bg-pink-800' onClick={handleClick}>Aumento el contador desde el nieto</button>
        </>    
    )
}
export default Nieto2


//Panel de administracion
/*
    Se plantea un panel de administracion (carpeta nueva dentro de componentes llamada useEffect)
    el panel de admin va a estar compuesto de los componentes navUser, main, todo esto va a estar englobado
    en otro componente llamado gestUser, creamos una carpeta src/data/db.json que contenga 15 user (username, email, password)
*/