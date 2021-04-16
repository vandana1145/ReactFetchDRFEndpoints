import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Item from './Item'

function CartItems() {
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        axios
        .get('http://127.0.0.1:8000/api/cartitems/')
        .then((response) => {
            console.log(response)
            setCartItems(response.data.results)
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    return (
        <div>
          <h3>List of carts with items:</h3> 
            {cartItems.map(item => <Item item={item}></Item>)}
        </div>
    )
}

export default CartItems;
