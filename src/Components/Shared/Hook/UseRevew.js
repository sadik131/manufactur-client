import { useEffect, useState } from "react"

const UseRevew = () => {
    const [review, setReview] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/revew')
        .then(res =>res.json())
        .then(data=>setReview(data))
    }, [])
    return [review]
}
export default UseRevew