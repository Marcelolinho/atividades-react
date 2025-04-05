import { useEffect, useRef } from "react"
import TitleButton from "../../components/TitleButton"

export default function InputFocus() {
    const emailInput = useRef(null)

    useEffect(() => {
        emailInput.current.focus()
    })
    return (
        <>
            <main>
                <div className="inputs-conatiner" style={{display: "flex", flexDirection: "column"}}>
                    <input type="text" className="email" ref={emailInput} />
                    <input type="text" className="name" />
                    <button className="send-button" onClick={() => emailInput.current.focus()}>Enviar</button>
                </div>
                <TitleButton />
            </main>
        </>
    )
}