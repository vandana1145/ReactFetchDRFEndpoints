import axios from 'axios'
import React, { useState, useEffect } from 'react'

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
            <table>
                <thead>
                    <tr>
                        <th>Cart no.</th>
                        <th>Product Id</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map(item => (
                        <tr key={item.id}>
                            <td>{item.cart}</td>
                            <td>{item.product}</td>
                            <td>{item.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default CartItems;
