const { useState, useEffect } = require("react")

const UseAdmin = (data) => {
    const [admin, setAdmin] = useState(false)
    const [adminLoading, setadminLoading] = useState(true)
    const email = data?.email
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/admin/${email}`, {
                method: "GET",
                headers: {
                    "authorization": `Bearer ${localStorage.getItem("accessToken")}`
                },
            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.admin)
                    setadminLoading(false)
                })
        }
    }, [email])

    return [admin, adminLoading]
}
export default UseAdmin;