import { useEffect, useState } from "react"

const UseTool = () =>{

    const [tools, setTools] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/tool')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return [tools]
}
export default UseTool