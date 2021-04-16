import axios from 'axios'
import React, { useEffect, useState } from 'react'

function SingleCart() {
    const [cart, setCart] = useState({})
    const [pk, setPk] = useState(1)
    const [cartPkFromButtonClick, setCartPkFromButtonClick] = useState(1)

    const handleClick = () => {
        setCartPkFromButtonClick(pk)
    }

    useEffect(() => {
        axios
        .get(`http://127.0.0.1:8000/api/cart/${cartPkFromButtonClick}/cartitems/`)
        .then((response) => {
            console.log(response)
            setCart(response.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [cartPkFromButtonClick])

    return (
        <div>
            Enter the cart Id:
            <br/>
            <input type="text" value={pk} onChange={e => setPk(e.target.value)}/>
            <button type="submit" onClick={handleClick}>Fetch</button>
            <br/>
            <p>User: {cart.user}</p>
            <p>Created on: {cart.created_at}</p>
        </div>
    )
}

export default SingleCart;
