import React,{useState} from 'react'

export default function Home() {
    const [n,setN] = useState(0);
    return (
        <div>
            <h3>{n}</h3>
            <button onClick={() => {
                setN(n+1)
            }}>+</button>
        </div>
    )
}
