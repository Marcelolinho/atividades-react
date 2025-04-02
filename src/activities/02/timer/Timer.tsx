import { useEffect, useState } from "react"
import TitleButton from "../../components/TitleButton";


export default function Timer() {
    const [time, setTime] = useState(59)

    useEffect(() => {
        if (time <= 0) return;

        const interval = setInterval(() => {
            setTime((seconds) => seconds -1)
        }, 1000)
        
        return () => clearInterval(interval)
    }, [time])
    
    return (
        <>
            <main>
                <h1>Timer</h1>
                <h2>{time}</h2>
            </main>
            <TitleButton />
        </>
    )
}