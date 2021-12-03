import React,{useState} from 'react'
import styles from './index.css'


export default function Home() {
    const [n,setN] = useState(0);
    return (
        <div>
            <h3 className={styles.number}>{n}</h3>
            <button className="button" onClick={() => {
                setN(n+1)
            }}>+</button>
        </div>
    )
}
