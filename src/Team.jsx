import { useState } from "react"

export default function Team() {

    
    const [count, setTeam] = useState(0)

    let Available = 11
        Available = Available - count

    const handleAdd = () => {
        const newCount = count + 1
        setTeam(newCount)
    }
    const handleReduce = () => {
        const reduceCount = count - 1
        setTeam(reduceCount)
    }

    const teamStyle = {
        border: '2px solid blue',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }


    return (
        <div style={teamStyle}>
            <h3>Players Available: {Available}</h3>
            <h3>Players: {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Remove</button>
        </div>
    )
}