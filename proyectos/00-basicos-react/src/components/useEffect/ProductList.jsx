import React, { useEffect, useState } from 'react'
import ProductCard from './productCard'
import LiProductList from './LiProductList'

const ProductList = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    const fetchProduct = async () =>{
        try {
            const response = await fetch("http://localhost:5173/src/data/db.json")
            if(!response.ok){
                throw new Error("Error en la peticion")
            } 
            setProducts(await response.json())
        } catch (error) {
            throw new Error("Error data")
        }
    }

    const addCart = (product) => {
        setCart((prevCart)=>[...prevCart, product]);
    }

    const deleteProductCart = (productId) => {
       //elimino del carrito el producto con id igual a productId
    }

    useEffect(() =>{
        fetchProduct()
    },[])//para que se pinte una sola vez

    useEffect(() =>{
        //aqui realizamos la suma del carrito y lo guardamos en un estado 
        //llamado totalCart que se muestra en el componente
    },[cart])//para que se pinte una sola vez


  return (
    <div className='w-full max-w-5xl mx-auto p-4'>
        <h1 className='text-2xl font-bold text-center mb-6'>Lista de Libros</h1>
        {/*Div para las productCard*/}
        <div className=''>
            {products.map((product) => {
                // Aquí llamo al componente ProductCard
                return <ProductCard key={product.id} product={product} addCart={addCart}/>
            })}
        </div>
        {/**Div para el UL del carrito */}
        <div className='mt-10'>
            <h2 className='text-2xl font-bold text-center'>Carrito de Compras</h2>
            <p className='text-xl font-semibold text-center mb-6'>Total Carrito: {}</p>
            {
                cart.length===0 ? (
                    <p className='text-xl font-semibold text-center mb-6'>{" "}Carrito Vacio{" "}</p>
                ) : (
                    <ul>
                        {
                            cart.map(product => {
                                <LiProductList key={product.id} product={product} deleteProductCart={deleteProductCart}/>
                            })
                        }
                    </ul> 
                )
            }
          
        </div>
       
    </div>
  )
}

export default ProductList