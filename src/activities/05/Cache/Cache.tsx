import axios from "axios"
import { useEffect, useRef, useState } from "react"


export default function Cache() {
    const [cep, setCep] = useState("")
    const cepInputRef = useRef(null)

    async function getCep(cep) {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => localStorage.setitem("cepInformation", response.data))
        .catch((e) => console.log(e))
    }

    useEffect({
        cepInputRef.current.focus()
    })

    return (
        <>
            <main>
                <input type="text" className="cep-input" placeholder="Digite o Cep" ref={cepInputRef} />
                <button className="cep-button" onClick={}>Get Cep (Local Storage)</button>
            </main>
        </>
    )
}