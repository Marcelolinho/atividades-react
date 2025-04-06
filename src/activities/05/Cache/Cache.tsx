import axios from "axios"
import { useEffect, useRef, useState } from "react"


export default function Cache() {
    const [cep, setCep] = useState("")
    const cepInputRef = useRef(null);
    const [cepData, setCepData] = useState<Cep>(undefined)
    const [getFromStorage, setGetFromStorage] = useState(false);

    useEffect(() => {
        cepInputRef?.current?.focus()
        tryInitData();
    }, [])

    function getCep() {
        const cepFormated = cep?.replace(/\D/g, "");

        if (!cep || cep.length !== 8) {
            setCepData(undefined);
            localStorage.removeItem("cepInformation");
            return;
        }
        
        axios.get(`https://viacep.com.br/ws/${cepFormated}/json/`)
            .then(response => {
                if (response?.data) {
                    localStorage.setItem("cepInformation", JSON.stringify(response.data));
                    setGetFromStorage(false);
                    setCepData(response.data)
                } else {
                    setCepData(undefined);
                    localStorage.removeItem("cepInformation");
                }
            })
            .catch((e) => console.log(e))
    }

    function tryInitData() {
        const dataFromLocalStorage = localStorage.getItem("cepInformation");

        if (dataFromLocalStorage) {
            setCepData(JSON.parse(dataFromLocalStorage));
            setGetFromStorage(true);
        } else if (getFromStorage) {
            setGetFromStorage(false);
        }
    }

    function showCepData() {
        const cepDataKeys = Array.from(Object.keys(cepData));
        
        return (
            <>
                <h5>
                    { 
                        getFromStorage ? "Veio do LocalStorage" : "Buscado agora" 
                    }
                </h5>
                <ul>
                    {
                        cepDataKeys.map(key => <li className="text-start" key={key}> { key }: { cepData[key] ?? "Não encontrado" } </li>)
                    }
                </ul>
            </>
        )
    }

    return (
        <>
            <main>
                <input type="text" className="cep-input" placeholder="Digite o Cep" ref={cepInputRef} onChange={element => setCep(element.target.value)} />
                <button className="cep-button" onClick={() => getCep()}>Get Cep (Local Storage)</button>
            </main>

            {
                cepData?.cep ? showCepData(): <p>Sem dados</p>
            }
        </>
    )
}

interface Cep {
    cep: string;
    logradouro: string;
    complemento: string;
    unidade: string;
    bairro: string;
    localidade: string;
    uf: string;
    estado: string;
    regiao: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
}