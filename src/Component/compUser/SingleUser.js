import React, { useState, useEffect } from 'react'
import axios from 'axios'

function SingleUser() {
    const [user, setUser] = useState({})
    const [pk, setPk] = useState(1)
    const [userPkFromButtonClick, setUserPkFromButtonClick] = useState(1)

    const handleClick = () => {
        setUserPkFromButtonClick(pk)
    }

    useEffect(() => {
        axios
        .get(`http://127.0.0.1:8000/api/user/${userPkFromButtonClick}`)
        .then(response => {
            console.log(response)
            setUser(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [userPkFromButtonClick])

    return (
        <React.Fragment>
            Enter the User Id:
            <br />
            <input type="text" value={pk} onChange={e => setPk(e.target.value)} />
            <button type="submit" onClick={handleClick}>Fetch</button>
            <p>User: <strong>{user.username}</strong></p>
            <p>Contact: <strong>{user.phone}</strong></p>
        </React.Fragment>
    )
}

export default SingleUser;
