import React, { useState } from 'react'


export default function Counter() {
    const [points, setPoints] = useState(5)
    const [casinoPoints, setCasinoPoints] = useState(10)
    console.log("This is useState ", useState(5));
    const [inputValue, setInputValue] = useState('')
    return (
        <div>Point {points}
            <button onClick={() => { setPoints(points + 3) }}>Get card</button>
            Casino Point {casinoPoints}
            <button onClick={() => { setCasinoPoints(casinoPoints + 3) }}>Casino card</button>
            <input type='text' value={inputValue} onChange={(e) => { setInputValue(e.target.value) }}></input>
        </div>
    )
}


