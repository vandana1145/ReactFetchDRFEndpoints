import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ProductsList = () => {
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        axios
        .get('http://127.0.0.1:8000/api/products')
        .then((response) => {
            console.log(response)
            setProducts(response.data.results)
        }).catch((err) => {
            console.log(err)
        })
    },[])
    
    return (
        <div>
            <h1>List of Products:</h1>
            <ul>
                {products.map(product =>
                    <li key={product.id}>Item: {product.product} <br/> Price: {product.price} Euros<br/><br/></li>
                )}
            </ul>
        </div>
    )
}

export default ProductsList;



