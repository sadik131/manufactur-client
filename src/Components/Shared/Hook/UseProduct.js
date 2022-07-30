import { useEffect, useState } from "react"

const UseProduct = () =>{
    const [tools, setTools] = useState([])

    useEffect(() => {
        fetch('https://lit-harbor-16430.herokuapp.com/tool')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return [tools, setTools]
}
export default UseProduct