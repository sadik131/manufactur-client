import { useEffect, useState } from "react"

const UseRevew = () => {
    const [review, setReview] = useState([])
    useEffect(() => {
        fetch('https://lit-harbor-16430.herokuapp.com/revew')
        .then(res =>res.json())
        .then(data=>setReview(data))
    }, [])
    return [review]
}
export default UseRevew