import React, { useState, useEffect } from 'react'
import axios from 'axios'

function SingleCategory() {
    const [category, setCategory] = useState({})
    const [pk, setPk] = useState(1)
    const [categoryPkFromButtonClick, setCategoryPkFromButtonClick] = useState(1)

    const handleClick = () => {
        setCategoryPkFromButtonClick(pk)
    }

    useEffect(() => {
        axios
        .get(`http://127.0.0.1:8000/api/category/${categoryPkFromButtonClick}`)
        .then(response => {
            console.log(response)
            setCategory(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [categoryPkFromButtonClick])

    return (
        <>
            Enter the Category Id: 
            <br/>
            <input type="text" value={pk} onChange={e => setPk(e.target.value)} />
            <button type="submit" onClick={handleClick}>Fetch</button>
            <br/>
            <h3>{category.category}</h3>
        </>
    )
} 

export default SingleCategory
