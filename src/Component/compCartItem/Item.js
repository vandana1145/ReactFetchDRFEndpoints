import React from 'react'

function Item({item}) {
    return (
        <div>
            <p>
                Cart No: {item.cart}
                <br/>
                Product Id: {item.product}
                <br/>
                Quantity: {item.quantity}
            </p>
        </div>
    )
}

export default Item
