import { useEffect, useRef, useState } from "react"


export default function TimerV2() {
    const [time, setTime] = useState(0)
    const [texto, setTexto] = useState(false)
    const timeReference = useRef(null)

    const startTimer = () => {
        if (!timeReference.current) {
          timeReference.current = setInterval(() => {
            setTime(prevTime => prevTime + 1)
          }, 1000)
        }
      }

    const pauseTimer = () => {
        clearInterval(timeReference.current)
        timeReference.current = null
        }

    const handleTimeChange = () => {
        if (texto) {
            startTimer()
        } else {
            pauseTimer()  
        }
        setTexto(!texto)
    }

    useEffect(() => {
        return () => {
          clearInterval(timeReference.current)
        }
      }, [])
    
      return (
        <div>
          <h1>{time}</h1>
          <button onClick={handleTimeChange}>
            {texto ? 'Retomar' : 'Pausar'}
          </button>
        </div>
      )
}