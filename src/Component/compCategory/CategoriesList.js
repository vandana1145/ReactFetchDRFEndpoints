import React, {useState, useEffect} from 'react'
import axios from 'axios'

const CategoriesList = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios
        .get('http://127.0.0.1:8000/api/categories')
        .then((response) => {
            console.log(response)
            setCategories(response.data.results)
        }).catch((err) => {
            console.log(err)
        })
    },[])

    return (
        <div>
            <h1>List of Categories:</h1>
            <ul>
                {categories.map(category =>
                    <li key={category.id}>{category.category}</li>
                )}
            </ul>
        </div>
    )
}

export default CategoriesList;


