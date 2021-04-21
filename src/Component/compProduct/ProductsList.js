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
            <h2>List of Products:</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Product</th>
                        <th>Description</th>
                        <th>Price (in Euros)</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.product}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProductsList;



