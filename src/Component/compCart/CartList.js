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
            <table>
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Created On</th>
                    </tr>
                </thead>
                <tbody>
                    {cartList.map(cart => (
                        <tr key={cart.id}>
                            <td>{cart.user}</td>
                            <td>{cart.created_at}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default CartList;
