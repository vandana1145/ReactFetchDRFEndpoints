import React, { useState, useEffect } from 'react'
import axios from 'axios'

function SingleProduct() {
    const [product, setProduct] = useState({})
    const [pk, setPk] = useState(1)
    const [productPkFromButtonClick, setProductPkFromButtonClick] = useState(1)

    const handleClick = () => {
        setProductPkFromButtonClick(pk)
    }

    useEffect(() => {
        axios
        .get(`http://127.0.0.1:8000/api/product/${pk}`)
        .then(response => {
            console.log(response)
            setProduct(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [productPkFromButtonClick])

    return (
        <>
            Enter the Product Id: 
            <br/>
            <input type="text" value={pk} onChange={e => setPk(e.target.value)} />
            <button type="submit" onClick={handleClick}>Fetch</button>
            <br/>
            <p>Product: <strong>{product.product}</strong></p>
            <p>Detail: <strong>{product.description}</strong></p>
            <p>Size: <strong>{product.size}</strong></p>
        </>
    )
} 

export default SingleProduct
