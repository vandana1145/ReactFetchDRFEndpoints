import axios from 'axios'
import React, { useState, useEffect } from 'react'

function CartList() {
    const [cartList, setCartList] = useState([])

    useEffect(() => {
        axios
        .get('http://127.0.0.1:8000/api/carts/')
        .then((response) => {
            console.log(response)
            setCartList(response.data.results)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <div>
            <h1>List of carts:</h1>
            <ul>
                {cartList.map(cart => 
                    <li key={cart.id}>{`User: ${cart.user}`} {`Created on: ${cart.created_at}`}</li>
                )}
            </ul>
        </div>
    )
}

export default CartList;
