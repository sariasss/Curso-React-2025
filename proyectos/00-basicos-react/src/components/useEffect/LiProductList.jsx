import React from 'react'

const LiProductList = (props) => {
    const { product, key } = props;
  return (
    <li 
    className='bg-gray-100 shadow-lg rounded-lg p-6 flex flex-col justify-between mb-10' 
    key={product.id}>{product.name}

        <span className=''>{product.name}</span>
        <span>{product.name}</span>
        <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-5'>Eliminar</button>
    </li>
  )
}

export default LiProductList