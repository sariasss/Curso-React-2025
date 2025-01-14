import React from 'react'

//Lista de productos renderizados

const productCard = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    const fetchProducts = async () => {
        try {
            const response = await fetch("http://localhost:5173/src/data/db.json")
            if(!response.ok){
                throw new Error("Error al obtener la data: ", error);
            }
            setProducts(await response.json());
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchProducts();
    })
    

  return (
    <div>productCard</div>
  )
}

export default productCard