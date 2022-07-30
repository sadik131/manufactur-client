import { useEffect, useState } from "react";

const UseToken = (user) => {
    const [token, setToken] = useState('')
    const email = user?.user?.email
    
    useEffect(() => {
        const current = { email: email }
        if (email) {
            fetch(`https://lit-harbor-16430.herokuapp.com/user/${email}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(current)
            })
                .then(res => res.json())
                .then(data => {
                    const token = data.token
                    localStorage.setItem("accessToken" , token)
                    setToken(token)
                });
        }

    }, [email])
    return [token]
}
export default UseToken;