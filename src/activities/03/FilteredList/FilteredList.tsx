import { useMemo, useState } from "react"


export default function FilteredList() {
    const [filtro, setFiltro] = useState("");
    const lista = ["marcelo", "wallows", "lupe de lupe", "bananinha", "bilada", "não sei"]; 

  const listaFiltrada = useMemo(() => {
    return lista.filter((item) => item.toLowerCase().includes(filtro.toLowerCase()));
  }, [filtro, lista]);
    
    return (
        <>
            <main>
                <div className="input-container">
                    
                </div>
            </main>
        </>
    )
}