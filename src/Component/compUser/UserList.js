import React, { useState, useEffect } from 'react'
import axios from 'axios'

function UserList() {
    const [userList, setUserList] = useState([])

    useEffect(() => {
        axios
        .get('http://127.0.0.1:8000/api/users/')
        .then((response) => {
            console.log(response)
            const op = response.data.results
            setUserList(op)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <div>
            <h1>List of Users:</h1>
            <ul>
                {userList.map(user => 
                    <li key={user.id}>{user.username}</li>
                )}
            </ul>
        </div>
    )
}

export default UserList;
